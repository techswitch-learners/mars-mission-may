import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Rover } from './components/Rover';

function App() {
    return (
        <Router>
            <NavBar />
            <div>Replace with component for weather bar</div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/timeline">
                    <div>Replace with component for timeline page</div>
                </Route>
                <Route exact path="/:rover">
                    <Rover />
                </Route>
                <Route exact path="/:rover/:photoId">
                    <div>Replace with component for photoId with the user selected photo, use the unique Id for each image from the api to replace the main content</div>
                </Route>
                <Route path="">
                    <div>Sorry path not found</div>
                </Route>
            </Switch>
            <div>Replace with component for footer</div>
        </Router>
    );
}

export default App;