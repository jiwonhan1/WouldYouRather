import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid } from "../elements";
import { connect } from "react-redux";

import QuestionList from "./QuestionList";

const Dashboard = (props) => {
  // const dispatch = useDispatch();

  return (
    <React.Fragment>
      <QuestionList />
    </React.Fragment>
  );
};

export default Dashboard;
