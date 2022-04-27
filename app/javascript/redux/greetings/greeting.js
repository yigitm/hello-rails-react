import Axios from 'axios';

// const
const GET_GREETING = 'hello-rails-react/greetings/GET_GREETING';

// actions
const fetchGreeting = (payload) => ({
  type: GET_GREETING,
  payload,
});

// state
const initialState = [];

export const fetchGreetingApi = () => async (dispatch) => {
  const returnValue = await Axios.get('/api/messages');
  const greeting = returnValue.data.data.greeting.content;
  console.log(greeting);
  dispatch(fetchGreeting(greeting));
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return null;
  }
};

export default reducer;
