import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../reducers";

import { Grid, Text } from "../elements";

import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";
import NotFound from "./NotFound";
import { Redirect } from "react-router-dom";

const Question = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const question = useSelector((state) => state.questions[id]);
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);

  const answered = authedUser
    ? users[authedUser].answers.hasOwnProperty(id)
      ? true
      : false
    : null;
  console.log(question);
  if (question === undefined) {
    return <Redirect to="/error" />;
  } else {
    return (
      <React.Fragment>
        <Grid center>
          <Text bold size="34px">
            Would you rather...
          </Text>
          {answered ? (
            <AnsweredQuestion
              question={question}
              authedUser={authedUser}
              users={users}
            />
          ) : (
            <UnansweredQuestion
              question={question}
              author={users[question.author]}
            />
          )}
        </Grid>
      </React.Fragment>
    );
  }
};

export default Question;
