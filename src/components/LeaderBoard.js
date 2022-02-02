import React, { useEffect } from "react";
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
      <Grid>
        <Text bold size="30px">
          Leader Board
        </Text>
        <Grid>
          {classifiedUsers.map((user) => {
            const { id, avatarURL, name, questions, answers } = user;
            return (
              <Grid key={id}>
                <Image src={avatarURL} alt={name} size={300} />
                <Grid is_flex>
                  <Text>{name} </Text>
                  <Text>{`Question Asked: ${questions.length}`}</Text>
                  <Text>{`Question Answered: ${
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
