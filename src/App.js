import Routes from './routes/index.routes';
import LhotseContextProvider from './context/index.context';



function App() {
  return (
    <LhotseContextProvider>
        <div className="App">
            <Routes/>
        </div>
    </LhotseContextProvider>
  );
}

export default App;
