import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "../src/css/main.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
