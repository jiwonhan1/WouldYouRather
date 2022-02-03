import React from "react";
import { useSelector } from "react-redux";

import { Grid, Image, Text } from "../elements";

const LeaderBoard = (props) => {
  const users = useSelector((state) => state.users);
  const [classifiedUsers, setClassifiedUsers] = React.useState([]);
  const classify = () => {
    let result = Object.values(users).sort(
      (a, b) =>
        b.questions.length +
        Object.keys(b.answers).length -
        (a.questions.length + Object.keys(a.answers).length)
    );
    setClassifiedUsers(result);
  };
  React.useEffect(() => {
    classify();
  }, []);
  console.log(classifiedUsers);
  return (
    <React.Fragment>
      <Grid center>
        <Text bold size="34px">
          Leader Board
        </Text>
        <Grid column>
          {classifiedUsers.map((user) => {
            const { id, avatarURL, name, questions, answers } = user;
            return (
              <Grid key={id} is_flex width="50%" border>
                <Image src={avatarURL} alt={name} size={200} />
                <Grid width="25%">
                  <Text size="30px">{name} </Text>
                  <Text size="22px">{`Question Asked: ${questions.length}`}</Text>
                  <Text size="22px">{`Question Answered: ${
                    Object.keys(answers).length
                  }`}</Text>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default LeaderBoard;
