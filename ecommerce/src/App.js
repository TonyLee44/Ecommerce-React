import React, { Component } from "react";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
    return (
      <Router>
        <Nav />
    <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
    </div>
    </Router>
  );
  }

export default App;
