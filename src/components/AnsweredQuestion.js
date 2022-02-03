import React from "react";
import { history } from "../reducers";
import { Grid, Text, Image } from "../elements";

const AnsweredQuestion = (props) => {
  const { optionOne, optionTwo, timestamp } = props.question;
  const author = props.users[props.question.author];
  const authedUser = props.authedUser;

  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercent = Math.round(
    (optionOne.votes.length / totalVotes) * 100
  );
  const optionTwoPercent = Math.round(
    (optionTwo.votes.length / totalVotes) * 100
  );
  return (
    <React.Fragment>
      <Grid column>
        <Grid is_flex width="50%" border>
          <Image src={author.avatarURL} size={200} />
          <Text size="35px">{author.name} asks...</Text>
        </Grid>
        <Grid width="50%" is_flex border>
          <Grid column border>
            <Grid>
              <Text size="28px" bold>
                {optionOne.text}
              </Text>
            </Grid>
            <Grid is_flex>
              <Text size="20px">Percent: {optionOnePercent}</Text>
              {optionOne.votes.includes(authedUser) ? (
                <Text bold size="20px">
                  Your choice
                </Text>
              ) : null}
              <Text size="20px">
                Chosen by {optionOne.votes.length} out of {totalVotes}
              </Text>
            </Grid>
          </Grid>
          <Grid column>
            <Grid>
              <Text size="28px" bold>
                {optionTwo.text}
              </Text>
            </Grid>
            <Grid is_flex>
              <Text size="20px">Percent: {optionTwoPercent}</Text>
              {optionTwo.votes.includes(authedUser) ? (
                <Text bold size="20px">
                  Your choice
                </Text>
              ) : null}
              <Text size="20px">
                Chosen by {optionTwo.votes.length} out of {totalVotes}
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AnsweredQuestion;
