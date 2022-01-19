import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import { receiveUsers, addUserQuestion, answerQuestion } from "./users";
import { receiveQuestions, addQuestion, addQuestionAnswer } from "questions";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = null;

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
        dispatch(setAuthedUser(AUTHED_ID));
      })
      .catch(function (error) {
        alert("There was an error: ", error);
      });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(authedUser, question.id));
      })
      .catch(function (error) {
        alert("There was an error: ", error);
      });
  };
}

export function handleAnswerQuestion(questionID, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestionAnswer({ authedUser, qid: questionID, answer: option })
      .then(() => {
        dispatch(answerQuestion(authedUser, questionID, option));
        dispatch(addQuestionAnswer(authedUser, questionID, option));
      })
      .catch(function (error) {
        alert("There was an error", error);
      });
  };
}
