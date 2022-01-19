import {
  _getUsers,
  _getQuetions,
  _saveQeustion,
  _saveQuestionAnswer,
} from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuetions()]).then(
    ([users, questions]) => ({ users, questions })
  );
}

export function saveQuestion(question) {
  return _saveQeustion(question);
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}
