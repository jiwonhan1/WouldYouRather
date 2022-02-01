import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./reducers";

import { connect } from "react-redux";

import { handleInitialData } from "./actions/shared";
// import PrivateRoute from "./utils/PrivateRoute";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Question from "./components/Question";
import NotFound from "./components/NotFound";

const App = (props) => {
  const { dispatch } = props;
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  const { authedUser } = props;
  console.log(authedUser);

  // if (authedUser === null) {
  //   history.push("login");
  // }
  return (
    <ConnectedRouter history={history}>
      {/* <Route path="/" exact component={Dashboard}/> */}
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Dashboard} />
      <Route path="/questions/:id" exact component={Question} />
      <Route path="/error" exact component={NotFound} />
      {/* <Route> */}
      {/* <Routes> */}
      {/* <Route exact path="/login" element={<Login users={props.users} />} /> */}
      {/* <Route exact path="/" element={<PrivateRoute component={Dashboard} />}> */}
      {/* <PrivateRoute exact path="/" element={<Dashboard />} /> */}
      {/* </Route> */}
      {/* </Routes> */}
      {/* </Route> */}
      {/* {props.authedUser === null ? (
        
      ) : (
        // <Route>
       
        // </Navigate>
      )} */}
    </ConnectedRouter>
  );
};

function mapStateToProps({ authedUser, users }) {
  return { authedUser, users };
}
export default connect(mapStateToProps)(App);
