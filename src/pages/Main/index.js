import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { requestLogout } from "../../redux/actions";

function Main(props) {
  const history = useHistory();
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const onLogOut = () => {
    props.requestlogout();
    history.push("/");
  };
  return (
    <div>
      <p>Welcome {userInfo.name}</p>
      <p>Your email is {userInfo.email}</p>
      <button onClick={onLogOut}>LogOut</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  requestlogout: () => dispatch(requestLogout()),
});

export default connect(null, mapDispatchToProps)(Main);
