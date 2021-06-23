import "./App.css";
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Privacy from "./pages/Privacy";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "../src/pages/NavBar";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Analysis from "./pages/Analysis";

import GlobalState from "./context/globalState";

function App() {
  return (
    <GlobalState>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chart" component={Chart} />
            <Route exact path="/analysis" component={Analysis} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/:ticker" component={Analysis} />
          </Switch>
        </Router>
      </div>
    </GlobalState>
  );
}

export default App;
