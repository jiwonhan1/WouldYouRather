import React from "react";
import { Grid, Text, Button } from "../elements";

import { useSelector, useDispatch } from "react-redux";

import { history } from "../reducers";
import { setAuthedUser } from "../actions/authedUser";

const Header = (props) => {
  const dispatch = useDispatch();
  const authed = useSelector((state) => state.authedUser);
  // const user = useSelector((state) => console.log(state.users[is_login].name));

  console.log(props);

  if (authed !== null) {
    const userName = props.users[authed].name;
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              Hello {userName}!
            </Text>
          </Grid>
          <Grid is_flex>
            <Button
              text="Home"
              _onClick={() => {
                history.push("/");
              }}
            />
            <Button
              text="Sign Out"
              _onClick={() => dispatch(setAuthedUser(null))}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Grid>
        <Text margin="0" size="24px" bold>
          Welcome to Would You Rather!
        </Text>
      </Grid>
    </React.Fragment>
  );
};

export default Header;
