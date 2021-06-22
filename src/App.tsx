import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import { Home } from './components/Home';

function App() {
    return (
        <Router forceRefresh={true}>
            <div>Replace with component for navbar</div>
            <div>Replace with component for weather bar</div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/timeline">
                    <div>Replace with component for timeline page</div>
                </Route>
                <Route exact path="/:rover">
                    <div>Replace with component for rover page. :rover is a variable name either spirit, opportunity or curiosity. The component should load each page based off of the rover name.</div>
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

