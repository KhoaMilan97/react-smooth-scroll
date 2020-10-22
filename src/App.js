import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages";
import SignInPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </Router>
  );
}

export default App;

// 2h37'31s
