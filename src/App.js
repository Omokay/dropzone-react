import LhotseContextProvider from './context/index.context';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Landing from './pages/landing/index.landing';

const App = () => {

  return (
    <LhotseContextProvider>

        <div className="App">
            <Router>
                <Route exact path='/'><Landing/></Route>
            </Router>
        </div>
    </LhotseContextProvider>
  );
}

export default App;
