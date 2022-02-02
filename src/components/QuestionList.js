import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Grid, Button } from "../elements";
import authedUser from "../reducers/authedUser";

const QuestionList = (props) => {
  const dispatch = useDispatch();
  const question_list = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const authed = useSelector((state) => state.authedUser);
  console.log(question_list);
  console.log(users);
  console.log(authed);

  const [answeredQuestions, setAnsweredQuestions] = React.useState([]);
  const [unansweredQuestions, setUnansweredQuestions] = React.useState([]);

  const answeredQuestion = () => {
    const questions = Object.keys(question_list)
      .filter((id) => users[authed].answers.hasOwnProperty(id))
      .sort((a, b) => question_list[b].timestamp - question_list[a].timestamp);
    console.log(questions);
    setAnsweredQuestions(questions);
  };

  const unansweredQuestion = () => {
    const questions = Object.keys(question_list)
      .filter((id) => !users[authed].answers.hasOwnProperty(id))
      .sort((a, b) => question_list[b].timestamp - question_list[a].timestamp);
    console.log(questions);
    setUnansweredQuestions(questions);
  };
  console.log(answeredQuestion);
  React.useEffect(() => {
    answeredQuestion();
    unansweredQuestion();
  }, [question_list]);
  return (
    <React.Fragment>
      <Grid is_flex></Grid>
    </React.Fragment>
  );
};

export default QuestionList;
