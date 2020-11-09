import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import Header from "../Header";
import { setIsLoading, requestLogin } from "../../redux/actions";

const SignInForm = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (props.loggedIn) {
      history.push("/main");
    }
  }, [history, props.loggedIn]);

  const handleChange = (e) =>
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setIsLoading(true);
    props.requestLogin(state.email, state.password);
  };

  const getFormContainer = () => {
    return (
      <div className="FormCenter">
        <form onSubmit={handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
            <p className="FormField__Label_Error">{props.errMsg.email}</p>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
            <p className="FormField__Label_Error">{props.errMsg.password}</p>
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>
            <Link to="/" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  };
  return (
    <div className="App">
      <div className="App__Aside" />
      <div className="App__Form">
        <Header />
        <LoadingOverlay
          active={props.isLoading}
          spinner
          styles={{
            wrapper: {
              height: "100%",
            },
          }}
        >
          {getFormContainer()}
        </LoadingOverlay>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.usersReducer.isLoading,
  loggedIn: state.usersReducer.loggedIn,
  errMsg: state.usersReducer.errMsg,
});

const mapDispatchToProps = (dispatch) => ({
  setIsLoading: (isLoading) => dispatch(setIsLoading(isLoading)),
  requestLogin: (email, password) => dispatch(requestLogin(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
