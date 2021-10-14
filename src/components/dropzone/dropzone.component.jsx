import React, {useContext, useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme} from "../../constants/theme";
import {formatToBase64} from "../../helper/b64-encoding";
import {LhotseContext} from "../../context/index.context";

// const getColor = (props) => {
//     if (props.isDragAccept) {
//         return '#00e676';
//     }
//     if (props.isDragReject) {
//         return '#ff1744';
//     }
//     if (props.isDragActive) {
//         return '#2196f3';
//     }
//     return '#ac4040';
// }

const theme = {
    backgroundColor: lightTheme.neutral,
    borderColor: lightTheme.primary,
    color: lightTheme.primary,
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
  color: ${props => props.theme.color};
  outline: none;
  transition: border .24s ease-in-out;
`;

const Wrapper = styled.div`
   width: 50%;
   height: 300px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${props => props.theme.backgroundColor};
   padding: 0 50px;

   border-radius: 8px;
`;


const Dropzone = () => {
    const { setFileName, setBase64} = useContext(LhotseContext);

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            setFileName(file.name);
            setBase64(formatToBase64(file));
        })
    }, [])

    const {
        getRootProps,
        getInputProps,
        // isDragActive,
        // isDragAccept,
        // isDragReject,
        // acceptedFiles,
    } = useDropzone({onDrop});


    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Container {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                    <p>
                        {/*{*/}
                        {/*    (files.length > 0) ? `${files.name}` : 'Bad file'*/}
                        {/*}*/}
                    </p>
                </Container>
            </Wrapper>
        </ThemeProvider>
    );
}

export default Dropzone;
