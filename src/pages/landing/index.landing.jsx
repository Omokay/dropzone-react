import React, {useState, useEffect, useContext} from 'react';
import Spinner from '../../components/spinner/spinner.component';
import styled, {ThemeProvider} from 'styled-components';
import Navbar from "../../components/navbar/navbar.component";
import DropZone from "../../components/dropzone/dropzone.component";
import PrimaryButton from "../../components/primaryButton/primaryButton.component";
import {LhotseContext} from "../../context/index.context";
import {fonts, lightTheme} from "../../constants/theme";
import Icons from '../../constants/index.icons';
import {axiosPost, baseUrl} from "../../http/axios-requests.http";

const theme = {
    fontRegular: fonts.robotoRegular,
    accent: lightTheme.secondary2,
    textColor: lightTheme.primary,
}

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-top: 100px;
   align-items: center;
   padding: 0;
`;

const Loader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
`;

const ButtonWrap = styled.div`
    width: 56%;
    height: auto;
    display: flex;
    justify-content: end;
    padding: 10px 0;
`;

const FileDesc = styled.div`
  min-width: 127px;
  max-width: 200px;
  height: 40px;
  padding: 5px 10px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.accent};
  margin: 2px 5px;
  border-radius: 4px;
  
  &:hover{
    cursor: pointer;
  }
`;

const SmallText = styled.p`
  min-width: 127px;
  max-width: 180px;
  height: 40px;
  padding: 5px;
  overflow-x: hidden;
  overflow-y: hidden;
  text-align: center;
  color: ${props => props.theme.textColor};
  font-family: ${props => props.theme.fontRegular};
`;


const Landing = () => {
    // State variables
    const {
            fileName,
            base64File,
            setFileName,
            setBase64
        } = useContext(LhotseContext);

    let [isLoading, setLoading] = useState(true);

    // Loader before DOM renders
    useEffect(() => {
        setInterval(() => setLoading(false), 2000);
    }, []);

    // Handle File in dropzone deletion
    const handleDelete = () => {
        setFileName('');
        setBase64('');
    };

    // Handle Base64 file upload to endpoint in baseURL using Axios
    const handleUpload = (base64File) => {
        if (base64File.length > 1 && typeof base64File === 'string') {
            let requestBody = {
                File: base64File,
                FileName: fileName,
            }
            axiosPost(`${baseUrl}, ${requestBody}`).then((res) => {
                console.log(res);
            });
        }
    };

    return (
        <ThemeProvider theme={theme}>
            {
                (isLoading) ?
                    <Loader>
                        <Spinner loading={isLoading}/>
                    </Loader> :
               <Main>
                   <Navbar />
                   <Container>
                       <DropZone/>
                       <ButtonWrap>
                           {
                               (fileName.length > 0) ?
                                   <FileDesc onClick={handleDelete}>
                                       <SmallText>{fileName}</SmallText>
                                        <img  src={Icons.trash} alt='cancel'/>
                                   </FileDesc> : ''
                           }
                           <PrimaryButton name='Upload' handleClick={() => handleUpload(base64File)}/>
                       </ButtonWrap>
                   </Container>
               </Main>
            }
        </ThemeProvider>
    )
};

export default Landing;
