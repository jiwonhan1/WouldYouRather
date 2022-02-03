import React, { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Grid, Text, Image, Select, Button } from "../elements";
import { history } from "../reducers";

const Login = (props) => {
  const { users, dispatch } = props;
  console.log(users);
  const [username, setUsername] = useState("");

  const imgUrl = "https://cdn-icons-png.flaticon.com/512/1256/1256677.png";

  const logIn = (e) => {
    e.preventDefault();
    console.log(username);
    if (username !== "") {
      dispatch(setAuthedUser(username));
      history.push("/");
    }
  };
  return (
    <React.Fragment>
      <Grid center column>
        <Image src={imgUrl} alt="log-in" size={300} />
        <Grid margin="10px">
          <Text size="32px" bold>
            Choose User
          </Text>
          <Select
            width="60%"
            children={users}
            _onChange={(e) => setUsername(e.target.value)}
          ></Select>
        </Grid>
        <Button width="50px" _onClick={logIn} text={"Select"}></Button>
      </Grid>
    </React.Fragment>
  );
};
const mapStateToProps = ({ users, authedUser }) => {
  return {
    users: Object.values(users).map((user) => {
      return { name: user.id };
    }),
    username: authedUser,
  };
};
export default connect(mapStateToProps)(Login);
