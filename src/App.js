import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import DetailService from "./Pages/Home/DetailService/DetailService";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/service/:id">
            <DetailService></DetailService>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
