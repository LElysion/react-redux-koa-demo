import axios from 'axios'

// actions_type

export const SELF_MESSAGE = 'selfer/SELF_MESSAGE';
export const SELF_GET_LOGIN_MESSAGE = 'selfer/SELF_GET_LOGIN_MESSAGE';

// state

const initialState = {
  message: 'self_message'
}

// reducers

export default (state = initialState, action) => {
  switch (action.type) {
    case SELF_MESSAGE:
      return Object.assign({}, state, {
        message: 'change_self_message'
      });
    case SELF_GET_LOGIN_MESSAGE:
      return Object.assign({}, state, {
        data: action.data
      })
    default: 
      return state;
  }
}


// actions

export const changeMessage = () => {
  return dispatch => {
    dispatch({
      type: SELF_MESSAGE
    });
  }
}

export const getLoginMessage = (data) => {
  return dispatch => {
    axios.post('/login', data).then(res => {
      console.log(res);
      dispatch({
        type: SELF_GET_LOGIN_MESSAGE,
        data: res.data
      })
    })
  }
}