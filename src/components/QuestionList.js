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
      <Grid column>
        <Grid
          width="50%"
          is_flex
          margin="10px"
          border
          _onClick={() => history.push(`/questions/${id}`)}
        >
          <Image src={user.avatarURL} alt={`${question.author}`} size={200} />
          <Grid width="70%">
            <Text size="30px" bold margin="0px">
              {user.name}
            </Text>
            <Text size="24px" margin="0px">
              {question.optionOne.text}
            </Text>
            <Text size="18px">Or</Text>
            <Text size="24px">{question.optionTwo.text}</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default QuestionList;
