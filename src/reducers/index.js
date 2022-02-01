import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import { connectRouter } from "connected-react-router";

export const history = createBrowserHistory();

export default combineReducers({
  authedUser,
  users,
  questions,
  router: connectRouter(history),
});
