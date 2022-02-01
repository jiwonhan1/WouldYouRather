import React from "react";
import { Grid, Text, Button } from "../elements";

import { history } from "../reducers";

const NotFound = (props) => {
  const { history } = props;
  return (
    <React.Fragment>
      <Grid>
        <Text>404 Error</Text>
        <Button
          _onClick={() => {
            history.replace("/");
          }}
          text={"Go Back to Dashboard"}
        />
      </Grid>
    </React.Fragment>
  );
};

export default NotFound;
