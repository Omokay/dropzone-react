import React, {useState, useEffect} from 'react';
import Spinner from '../../components/spinner/spinner.component';
import styled from 'styled-components';
import Navbar from "../../components/navbar/navbar.component";
import DropZone from "../../components/dropzone/dropzone.component";
import PrimaryButton from "../../components/primaryButton/primaryButton.component";


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


const Landing = () => {
    let [isLoading, setLoading] = useState(true);

    // Loader before DOM renders
    useEffect(() => {
        setInterval(() => setLoading(false), 2000);
    }, []);


    const handleUpload = () => {
        console.log('Upload file');
    };

    return (
        <>
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
                           <PrimaryButton name='Upload File' handleClick={handleUpload}/>
                       </ButtonWrap>
                   </Container>
               </Main>
            }
        </>
    )
};

export default Landing;
