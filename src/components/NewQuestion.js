import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <Grid>
        <Grid>
          <Text>Would you rather...</Text>
        </Grid>
        <Grid>
          <Input
            label={"Choice One"}
            placeholder="Please enter choice one"
            _onChange={(e) => {
              setOptionOne(e.target.value);
            }}
          />
        </Grid>
        <Grid>
          <Input
            label={"Choice Two"}
            placeholder="Please enter choice two"
            _onChange={(e) => {
              setOptionTwo(e.target.value);
            }}
          />
        </Grid>
        <Button
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
