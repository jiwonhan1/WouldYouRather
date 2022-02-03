import React from "react";
import { useDispatch } from "react-redux";
import { history } from "../reducers";

import { Grid, Input, Button, Text } from "../elements";
import { handleAddQuestion } from "../actions/shared";

const NewQuestion = (props) => {
  const dispatch = useDispatch();

  const [optionOne, setOptionOne] = React.useState("");
  const [optionTwo, setOptionTwo] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(optionOne, optionTwo));
    setOptionOne("");
    setOptionTwo("");
    history.replace("/");
  };
  return (
    <React.Fragment>
      <Grid column>
        <Grid center>
          <Text bold size="34px">
            Would you rather...
          </Text>
        </Grid>
        <Grid width="60%">
          <Input
            width="550px"
            label={"Choice One"}
            placeholder="Please enter choice one"
            _onChange={(e) => {
              setOptionOne(e.target.value);
            }}
          />
        </Grid>
        <Grid width="60%">
          <Input
            width="550px"
            label={"Choice Two"}
            placeholder="Please enter choice two"
            _onChange={(e) => {
              setOptionTwo(e.target.value);
            }}
          />
        </Grid>
        <Button
          width="300px"
          text="Submit"
          _onClick={(e) => {
            handleSubmit(e);
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default NewQuestion;
