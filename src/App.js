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
import Header from "./components/Header";

import { Grid } from "./elements";

const App = (props) => {
  const { dispatch } = props;

  useEffect(() => {
    if (props.authedUser === null) {
      history.push("/login");
    }
  }, [props.authedUser]);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const { authedUser } = props;

  console.log(authedUser);

  return (
    <React.Fragment>
      <Grid>
        <Header {...props} />
        <ConnectedRouter history={history}>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/questions/:id" exact component={Question} />
          <Route path="/error" exact component={NotFound} />
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
};

function mapStateToProps({ authedUser, users }) {
  return { authedUser, users };
}
export default connect(mapStateToProps)(App);
