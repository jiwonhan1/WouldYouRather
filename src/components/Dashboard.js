import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Grid, Button } from "../elements";
import authedUser from "../reducers/authedUser";

import QuestionList from "./QuestionList";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const question_list = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const authed = useSelector((state) => state.authedUser);

  const [answeredQuestions, setAnsweredQuestions] = React.useState([]);
  const [unansweredQuestions, setUnansweredQuestions] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState("1");

  const answeredQuestion = () => {
    const questions = Object.keys(question_list)
      .filter((id) => users[authed].answers.hasOwnProperty(id))
      .sort((a, b) => question_list[b].timestamp - question_list[a].timestamp);
    setAnsweredQuestions(questions);
  };

  const unansweredQuestion = () => {
    const questions = Object.keys(question_list)
      .filter((id) => !users[authed].answers.hasOwnProperty(id))
      .sort((a, b) => question_list[b].timestamp - question_list[a].timestamp);
    setUnansweredQuestions(questions);
  };
  React.useEffect(() => {
    answeredQuestion();
    unansweredQuestion();
  }, [question_list]);

  return (
    <React.Fragment>
      <Grid is_flex>
        <Button text="Unanswered" _onClick={() => setActiveTab("1")} />
        <Button text="Answered" _onClick={() => setActiveTab("2")} />
      </Grid>
      <Grid>
        {unansweredQuestions && activeTab == "1"
          ? unansweredQuestions.map((id) => <QuestionList key={id} id={id} />)
          : answeredQuestions.map((id) => <QuestionList key={id} id={id} />)}
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
