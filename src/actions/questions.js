import {API_BASE_URL} from '../config';
// import {normalizeResponseErrors} from './utils';

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
const fetchQuestionRequest = () => ({
  type: FETCH_QUESTION_REQUEST
});

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
const fetchQuestionSuccess = question => ({
  type: FETCH_QUESTION_SUCCESS,
  question
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
const fetchQuestionError = error => ({
  type: FETCH_QUESTION_ERROR,
  error
});

export const fetchQuestion = () => dispatch => {
  
  dispatch(fetchQuestionRequest());
  console.log('hello fetch')
  fetch(`${API_BASE_URL}/questions`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(question => dispatch(fetchQuestionSuccess(question)))
    .catch(error => dispatch(fetchQuestionError(error)));
};
