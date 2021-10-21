import {useState, useEffect, useContext} from 'react';
import Spinner from '../../components/spinner/spinner.component';
import styled, {ThemeProvider} from 'styled-components';
import Navbar from "../../components/navbar/navbar.component";
import DropZone from "../../components/dropzone/dropzone.component";
import PrimaryButton from "../../components/primaryButton/primaryButton.component";
import {LhotseContext} from "../../context/index.context";
import {bigfonts, lightTheme} from "../../constants/theme";
import Icons from '../../constants';
import {axiosPost, baseUrl} from "../../http/axios-requests.http";
import {showLoader, hideLoader} from "../../components/Loader/loader.component";
import Feedback from "../../components/postFeedback/feedback.component";
import {Dark, Light} from "../../constants/global.styles";


const Landing = () => {
    // State variables
    const {darkTheme, fileName, base64File, setFileName, setBase64} = useContext(LhotseContext);

    const [isLoading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [info, setInfo] = useState(false);

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
    const handleUpload = () => {
        if (fileName.length < 1) setInfo(true)
        if (base64File.length && typeof base64File === 'string' && fileName.length) {
            let requestBody = {
                File: base64File,
                FileName: fileName,
            };
            showLoader()
            axiosPost(`${baseUrl}`, requestBody).then((res) => {
                if (res) {
                   hideLoader();
                   setSuccess(true);
                   setError(false);

                   setFileName('');
                   setBase64('');
                } else {
                    hideLoader();
                    setError(true);
                    setSuccess(false);
                }
            });
           // setInfo(false);
        }
        setSuccess(false);
        setError(false);

    };


    return (
        <ThemeProvider theme={theme}>
            {
                (isLoading) ? <Loader><Spinner loading={isLoading}/></Loader> :
               <Main>
                   {(darkTheme) ? <Dark/> : <Light/>}
                   <Navbar />
                   <Container>
                       <Header>
                           <HeaderText>
                               Upload File in Base64 Format
                           </HeaderText>
                       </Header>
                       <DropZone/>
                       <ButtonWrap>
                           {
                               (fileName.length) ?
                                   <FileDesc onClick={handleDelete}>
                                       <SmallText>{fileName}</SmallText>
                                        <img  src={Icons.trash} alt='cancel'/>
                                   </FileDesc> : ''
                           }
                           <PrimaryButton name='Upload' handleClick={handleUpload}/>
                       </ButtonWrap>
                   </Container>

               {/* Conditional Rendering of Toast Messages   */}
                   {(success) ?  <Feedback notify='Upload was successful' status='success'/>: ''}
                   {(error) ?   <Feedback notify='Upload was Failed' status='error'/> : ''}
                   {(info) ?  <Feedback notify='Choose a file to upload' status='hint'/> : ''}
               </Main>
            }
        </ThemeProvider>
    )
};

export default Landing;





const theme = {
    bigfontweight: bigfonts.fontWeight,
    bigfontsize: bigfonts.fontSize,
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

const Header = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.p`
   font-weight: ${props => props.theme.bigfontweight};
   font-size: ${props => props.theme.bigfontsize};
   //color: ${props => props.theme.textColor};
   text-transform: uppercase;
   text-align: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 5px;
  overflow-y: hidden;
  overflow-x: hidden;
  color: ${props => props.theme.textColor};
`;
