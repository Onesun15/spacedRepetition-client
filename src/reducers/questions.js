import { 
    FETCH_QUESTIONS_REQUEST,
    FETCH_QUESTIONS_ERROR,
    FETCH_QUESTIONS_SUCCESS
  } from '../actions/questions'

  const initialState = {
    data: null,
    error: null,
    loading: false
  }

  export default function reducer(state = initialState, action){
    if(action.type === FETCH_QUESTIONS_REQUEST){
      return Object.assign({}, state, {
        loading: true
      }) 
    }
    if(action.type === FETCH_QUESTIONS_SUCCESS){
      return Object.assign({}, state, {
        data: action.questions,
        loading: false
      })
    }
    if(action.type === FETCH_QUESTIONS_ERROR){
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    }
  
      return state;
  }