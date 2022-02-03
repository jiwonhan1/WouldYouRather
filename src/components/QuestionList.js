import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Grid, Button, Image, Text } from "../elements";

import { history } from "../reducers";

const QuestionList = (props) => {
  const { id } = props;
  const question = useSelector((state) => state.questions[id]);
  const user = useSelector((state) => state.users[question.author]);
  return (
    <React.Fragment>
      <Grid _onClick={() => history.push(`/questions/${id}`)}>
        <Image src={user.avatarURL} alt={`${question.author}`} size={200} />
        <Grid is_flex>
          <Text>{user.name}</Text>
          <Text>{question.optionOne.text}</Text>
          <Text>{question.optionTwo.text}</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default QuestionList;
