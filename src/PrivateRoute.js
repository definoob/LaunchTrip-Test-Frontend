import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem("loggedIn") ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ path: "/" }} />
      )
    }
  />
);

export default PrivateRoute;
