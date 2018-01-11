import {API_BASE_URL} from '../config';


export const FETCH_ANSWER_REQUEST = 'FETCH_ANSWER_REQUEST';
const fetchAnswerRequest = () => ({
  type: FETCH_ANSWER_REQUEST
});

export const FETCH_ANSWER_SUCCESS = 'FETCH_ANSWER_SUCCESS';
const fetchAnswerSuccess = question => ({
  type: FETCH_ANSWER_SUCCESS,
  question
});

export const FETCH_ANSWER_ERROR = 'FETCH_ANSWER_ERROR';
const fetchAnswerError = error => ({
  type: FETCH_ANSWER_ERROR,
  error
});

export const fetchAnswer = (boolean) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchAnswerRequest());
  console.log('fetch answer working')
  fetch(`${API_BASE_URL}/questions/answer`,  {
    method: 'POST',
    body: JSON.stringify({ boolean }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authToken}`}
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(answer => dispatch(fetchAnswerSuccess(answer)))
    .catch(error => dispatch(fetchAnswerError(error)));
};
