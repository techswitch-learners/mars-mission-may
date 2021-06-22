import './App.scss';
import { Home } from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>
                    Hello World!
                </h2>
            </header>
        </div>
    );
}

export default App;

