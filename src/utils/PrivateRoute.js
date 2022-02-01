import React, { Component } from "react";
import { Navigate, Route } from "react-router-dom";
import { connect } from "react-redux";
import authedUser from "../reducers/authedUser";

export const PrivateRoute = ({ component: Component, authedUser }) => {
  console.log(authedUser);
  // <Route
  //   {...rest}
  //   render={(props) => {
  //     return authedUser ? (
  //       <React.Fragment>
  //         <Component {...props} />
  //       </React.Fragment>
  //     ) : (
  //       <Navigate
  //         to={{ pathname: "/login", state: { from: props.location } }}
  //       />
  //     );
  //   }}
  // />
  // return authedUser ? (<React.Fragment><Component {...props}/></React.Fragment>) :
  // (<Navigate to={{pathname: '/login', state:{from : props.location}}}
  return authedUser ? (
    <React.Fragment>
      <Component />
    </React.Fragment>
  ) : (
    <Navigate to="/login" />
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
