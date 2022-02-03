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
        <Grid is_flex backgroundColor={"green"}>
          <Grid is_flex width="20%">
            <Text margin="0px" size="24px" bold color={"#ffffff"}>
              Hello {userName}!
            </Text>
            <Button
              nav
              width="200px"
              text="Sign Out"
              _onClick={() => {
                dispatch(setAuthedUser(null));
                history.replace("/");
              }}
            />
          </Grid>
          <Button
            nav
            width="200px"
            text="Home"
            _onClick={() => {
              history.push("/");
            }}
          />
          <Button
            nav
            width="200px"
            text="New Question"
            _onClick={() => {
              history.push("/add");
            }}
          />
          <Button
            nav
            width="200px"
            text="Leader Board"
            _onClick={() => {
              history.push("/leaderboard");
            }}
          />
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Grid center>
        <Text margin="0" size="40px" bold>
          Would You Rather?
        </Text>
      </Grid>
    </React.Fragment>
  );
};

export default Header;
