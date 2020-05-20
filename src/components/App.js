import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Users from "./Users";
import Tasks from "./Tasks";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="margin">
      <Route exact path="/" component={Users} />
      <Route exact path="/tasks" component={Tasks} />
    </div>
  </BrowserRouter>
);

export default App;
