import {
  FETCH_ANSWER_REQUEST,
  FETCH_ANSWER_SUCCESS,
  FETCH_ANSWER_ERROR,
  FETCH_NEXT_REQUEST,
  FETCH_NEXT_SUCCESS,
  FETCH_NEXT_ERROR
} from '../actions/answers';

import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR
} from '../actions/questions';



const initialState = {
  data: [],
  loading: false,
  error: null,
};

//----------------------------------------------------------------Answer REDUCER-----------------------------------------------------------------

export default (state = initialState, action) => {
  if (action.type === FETCH_ANSWER_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_ANSWER_SUCCESS) {
    console.log('action', action.question)
    return Object.assign({}, state, {
      data: action.data,
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_ANSWER_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } 
    else if (action.type === FETCH_NEXT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_NEXT_SUCCESS) {
   // console.log('action', action.question)
    return Object.assign({}, state, {
      data: action.data,
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_NEXT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } 
    else if (action.type === FETCH_QUESTION_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_QUESTION_SUCCESS) {
    //console.log('action', action.question)
    return Object.assign({}, state, {
      data: action.question.questions,
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_QUESTION_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } 
  return state;
};