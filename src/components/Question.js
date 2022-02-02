import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../reducers";

import { Grid, Text } from "../elements";

import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";

const Question = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const question = useSelector((state) => state.questions[id]);
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  // const userAnswers = useSelector((state) => state.users[authedUser].answers);

  const answered = users[authedUser].answers.hasOwnProperty(id) ? true : false;

  if (question === null) {
    history.push("/error");
  }
  return (
    <React.Fragment>
      <Grid>
        <Text>Would you rather...</Text>
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
};

export default Question;
