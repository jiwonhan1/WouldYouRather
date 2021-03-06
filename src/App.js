import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";

import { Grid } from "./elements";

const App = (props) => {
  const { dispatch } = props;

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  // useEffect(() => {
  //   if (props.authedUser === null) {
  //     history.push("/login");
  //   }
  // }, []);
  console.log(props.authedUser);

  console.log(props);
  if (props.authedUser === null) {
    return (
      <React.Fragment>
        <Router>
          <Route>
            <Grid>
              <Header {...props} />
              <Login />
            </Grid>
          </Route>
        </Router>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid>
          <Header {...props} />
          <ConnectedRouter history={history}>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Dashboard} />
            <Route path="/questions/:id" exact component={Question} />
            <Route path="/error" exact component={NotFound} />
            <Route path="/add" exact component={NewQuestion} />
            <Route path="/leaderboard" exact component={LeaderBoard} />
          </ConnectedRouter>
        </Grid>
      </React.Fragment>
    );
  }
};

function mapStateToProps({ authedUser, users }) {
  return { authedUser, users };
}
export default connect(mapStateToProps)(App);
