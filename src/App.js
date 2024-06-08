// App.js
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Users from "./components/users/Users";
import Home from "./components/layout/Home";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <h1>GitHub Users Data</h1>
          <Home />
        </div>
      </Router>
    </div>
  );
};
export default App;
