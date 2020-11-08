import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Header from "./pages/Header";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App__Aside" />
        <div className="App__Form">
          <Header />
          <Route exact path="/" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
