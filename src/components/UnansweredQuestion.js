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
      <Grid>
        <Image src={avatarURL}></Image>
        <Text>{name} asks: </Text>
      </Grid>
      <Grid padding="16px 0px" is_flex>
        <Input
          type={"radio"}
          label={optionOne.text}
          _onChange={(e) => {
            setAnswer("optionOne");
          }}
        />
      </Grid>
      <Grid padding="16px 0px">
        <Input
          type={"radio"}
          label={optionTwo.text}
          _onChange={(e) => {
            setAnswer("optionTwo");
          }}
        />
      </Grid>
      <Button
        text="Would you Rather?"
        _onClick={(e) => {
          handleSubmit(id, e);
        }}
      />
    </React.Fragment>
  );
};
export default UnansweredQuestion;
