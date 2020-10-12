import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./compoents/Details";
import Home from "./compoents/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
