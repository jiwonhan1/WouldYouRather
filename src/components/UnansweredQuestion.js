import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleAddQuestion, handleAnswerQuestion } from "../actions/shared";

import { Grid, Input, Button, Image, Text } from "../elements";

const UnansweredQuestion = (props) => {
  const dispatch = useDispatch();
  const { optionOne, optionTwo, timestamp, id } = props.question;
  const { name, avatarURL } = props.author;
  const [answer, setAnswer] = React.useState("");
  // const [option, setOption] = React.useState("");
  console.log(props);
  const handleSubmit = (id, e) => {
    e.preventDefault();
    if (answer !== "") {
      dispatch(handleAnswerQuestion(id, answer));
    }
  };
  return (
    <React.Fragment>
      <Grid column>
        {/* <Grid border center> */}
        <Grid is_flex width="50%">
          <Image src={avatarURL} size={200}></Image>
          <Text size="35px">{name} asks </Text>
        </Grid>
        <Grid width="50%" border>
          <Input
            type={"radio"}
            label={optionOne.text}
            _onChange={(e) => {
              setAnswer("optionOne");
            }}
          />
          {/* </Grid> */}
          {/* <Grid padding="16px 0px"> */}
          <Input
            type={"radio"}
            label={optionTwo.text}
            _onChange={(e) => {
              setAnswer("optionTwo");
            }}
          />
        </Grid>
        {/* </Grid> */}
        <Button
          width="300px"
          text="Would you Rather?"
          _onClick={(e) => {
            handleSubmit(id, e);
          }}
        />
      </Grid>
    </React.Fragment>
  );
};
export default UnansweredQuestion;
