import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import { setIsLoading, requestSignup } from "../../redux/actions";
import Header from "../Header";

const SignUpForm = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    if (props.loggedIn) {
      history.push("/main");
    }
  }, [history, props.loggedIn]);

  const handleChange = (e) =>
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setIsLoading(true);
    props.requestSignup(
      state.name,
      state.email,
      state.password,
      state.passwordConfirm
    );
  };

  const getFormContainer = () => {
    return (
      <div className="FormCenter">
        <form onSubmit={handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              className="FormField__Input"
              placeholder="Enter your full name"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
            <p className="FormField__Label_Error">{props.errMsg.name}</p>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
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
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
            <p className="FormField__Label_Error">{props.errMsg.password}</p>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password Confirmation
            </label>
            <input
              type="password"
              className="FormField__Input"
              placeholder="Enter your password again"
              name="passwordConfirm"
              value={state.passwordConfirm}
              onChange={handleChange}
            />
            <p className="FormField__Label_Error">{props.errMsg.confirm}</p>
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
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
  error: state.usersReducer.error,
  errMsg: state.usersReducer.errMsg,
});

const mapDispatchToProps = (dispatch) => ({
  requestSignup: (username, email, password, password_confirmation) =>
    dispatch(requestSignup(username, email, password, password_confirmation)),
  setIsLoading: (isLoading) => dispatch(setIsLoading(isLoading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
