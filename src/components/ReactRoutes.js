import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Team from "../pages/Team";
import Reports from "../pages/Reports";
import Products from "../pages/Products";

class ReactRoutes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/team" component={Team} />
              <Route path="/reports" component={Reports} />
              <Route path="/products" component={Products} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default ReactRoutes;
