import {
  FETCH_ANSWER_REQUEST,
  FETCH_ANSWER_SUCCESS,
  FETCH_ANSWER_ERROR
} from '../actions/answers';

const initialState = {
  data: [],
  loading: false,
  error: null
};

//---------------Answer REDUCER-----------------------------------------------------------------

export default (state = initialState, action) => {
  if (action.type === FETCH_ANSWER_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_ANSWER_SUCCESS) {
    console.log('Fetch Answer Success Reducer', action.answer.questions.answer);
    return Object.assign({}, state, {
      data: action,
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_ANSWER_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
};
