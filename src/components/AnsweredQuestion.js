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
      <Grid is_flex>
        <Grid is_flex>
          <Image src={author.avatarURL} size={150} />
          <Text>{author.name} asks:</Text>
        </Grid>
        <Grid>
          <Grid>
            <Text>{optionOne.text}</Text>
            <Text>{optionOnePercent}</Text>
          </Grid>
          <Grid>
            {optionOne.votes.includes(authedUser) ? (
              <Text bold> Your choice</Text>
            ) : null}
            <Text>
              Chosen by {optionOne.votes.length} out of {totalVotes}
            </Text>
          </Grid>
          <Grid>
            <Text>{optionTwo.text}</Text>
            <Text>{optionTwoPercent}</Text>
          </Grid>
          <Grid>
            {optionTwo.votes.includes(authedUser) ? (
              <Text bold> Your choice</Text>
            ) : null}
            <Text>
              Chosen by {optionTwo.votes.length} out of {totalVotes}
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AnsweredQuestion;
