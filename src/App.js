import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <PrivateRoute exact path="/main" component={Main} />
      <Route exact path="/" component={SignUp} />
      <Route exact path="/sign-in" component={SignIn} />
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.usersReducer.loggedIn,
});

export default connect(mapStateToProps)(App);
