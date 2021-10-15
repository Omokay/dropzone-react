import React, {useContext, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, regularfonts} from "../../constants/theme";
// import {formatToBase64} from "../../helper/b64-encoding";
import {LhotseContext} from '../../context/index.context';

const theme = {
    backgroundColor: lightTheme.neutral,
    borderColor: lightTheme.primary,
    color: lightTheme.primary,
    fontFamily: regularfonts.fontFamily,
    fontWeight: regularfonts.fontWeight,
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => props.theme.borderColor};
  border-style: dashed;
  //color: ${props => props.theme.color};
  outline: none;
  transition: border .24s ease-in-out;
`;

const Wrapper = styled.div`
   width: 50%;
   height: 300px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   background-color: ${props => props.theme.backgroundColor};
   padding: 0 50px;
   border-radius: 8px;
`;

const Paragraph = styled.p`
  font-weight: ${props => props.theme.fontWeight};
`;

const Dropzone = () => {
    const {setFileName, fileName, setBase64} = useContext(LhotseContext);

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            // Set File name
            setFileName(file.name);

            // Instantiate File Reader
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onabort = () =>  'File reading was aborted'
            reader.onerror = () => 'File could not be read'

            // Once onload is invoked, set result to base64File
            reader.onload = () => {
                setBase64(reader.result);
            };
        })
    }, [])

    const {
        getRootProps,
        getInputProps,
    } = useDropzone({onDrop});


    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Container {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Paragraph>
                        {
                            (fileName.length > 0) ? `Click the Upload button to submit ${fileName} in base64 format` :
                                'Drag \'n\' drop a file here, or click to choose a file'
                        }
                    </Paragraph>
                </Container>

            </Wrapper>
        </ThemeProvider>
    );
}

export default Dropzone;
