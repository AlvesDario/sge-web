import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import "./style.css";
import Login from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/home' component={MainPage} />
    </Switch>
  );
}
