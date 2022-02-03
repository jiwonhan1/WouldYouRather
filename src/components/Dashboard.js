import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Grid, Button } from "../elements";

import QuestionList from "./QuestionList";

const Dashboard = (props) => {
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
      <Grid center>
        <Grid is_flex>
          <Grid>
            <Button
              margin="20px"
              width="300px"
              text="Unanswered"
              _onClick={() => setActiveTab("1")}
            />
          </Grid>
          <Grid>
            <Button
              margin="20px"
              width="300px"
              text="Answered"
              _onClick={() => setActiveTab("2")}
            />
          </Grid>
        </Grid>
        <Grid>
          {unansweredQuestions && activeTab == "1"
            ? unansweredQuestions.map((id) => <QuestionList key={id} id={id} />)
            : answeredQuestions.map((id) => <QuestionList key={id} id={id} />)}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
