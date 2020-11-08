import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="PageSwitcher">
        <NavLink
          to="/sign-in"
          activeClassName="PageSwitcher__Item--Active"
          className="PageSwitcher__Item"
        >
          Sign In
        </NavLink>
        <NavLink
          exact
          to="/"
          activeClassName="PageSwitcher__Item--Active"
          className="PageSwitcher__Item"
        >
          Sign Up
        </NavLink>
      </div>
      <div className="FormTitle">
        <NavLink
          to="/sign-in"
          activeClassName="FormTitle__Link--Active"
          className="FormTitle__Link"
        >
          Sign In
        </NavLink>{" "}
        or{" "}
        <NavLink
          exact
          to="/"
          activeClassName="FormTitle__Link--Active"
          className="FormTitle__Link"
        >
          Sign Up
        </NavLink>
      </div>
    </>
  );
}

export default Header;
