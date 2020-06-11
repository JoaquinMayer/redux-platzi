import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Users from "./Users";
import Tasks from "./Tasks";
import Posts from "./Posts";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="margin">
      <Route exact path="/" component={Users} />
      <Route exact path="/tasks" component={Tasks} />
      <Route exact path="/posts/:key" component={Posts} />
    </div>
  </BrowserRouter>
);

export default App;
