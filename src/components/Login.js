import React, { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Grid, Text, Image, Select, Button } from "../elements";
import { history } from "../reducers";

const Login = (props) => {
  const { users, dispatch } = props;
  console.log(users);
  const [username, setUsername] = useState("");

  const imgUrl =
    "https://cdn-icons.flaticon.com/png/512/1921/premium/1921935.png?token=exp=1643666280~hmac=c20a8be4128b55c464fb02775ea833af";

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
