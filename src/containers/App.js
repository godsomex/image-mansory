import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Details from "../compoents/details/Details";
import Home from "../compoents/home/Home";
import Menu from "../compoents/menu/Menu";
import useToggle from "../hooks/useToggle";

function App() {
  const [section, setSection] = useState("user");
  const [window, setWindow] = useState("all");
  const [sort, setSort] = useState("user");
  const [viral, onToggle] = useToggle(false);

  const handleSection = (e) => setSection(e.target.value);
  const handleWindow = (e) => setWindow(e.target.value);
  const handleSort = (e) => setSort(e.target.value);

  return (
    <Router>
      <Menu
        handleSection={handleSection}
        onToggle={onToggle}
        handleWindow={handleWindow}
        handleSort={handleSort}
        viral={viral}
      />
      <Switch>
        <Route exact path="/">
          <Home section={section} viral={viral} window={window} sort={sort} />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
