import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Question = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  console.log(id);
  return <React.Fragment></React.Fragment>;
};

export default Question;
