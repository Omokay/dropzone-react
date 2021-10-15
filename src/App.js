import Routes from './routes/index.routes';
import LhotseContextProvider, {LhotseContext} from './context/index.context';
import {Light, Dark} from "./constants/global.styles";



function App() {
  return (
    <LhotseContextProvider>
        {/*{*/}
        {/*    (darkTheme) ? <Dark/> : <Light/>*/}
        {/*}*/}
        <div className="App">
            <Routes/>
        </div>
    </LhotseContextProvider>
  );
}

export default App;
