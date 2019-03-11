import { ADD_POST, FETCH_POST } from "../constants/action-types";
const initialState = {
  posts: []
};
function postReducer(state = initialState, action) {
  if (action.type === ADD_POST) {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    });
  }
  if (action.type === FETCH_POST) {
    return  Object.assign({}, state, {
      posts: state.posts.concat(action.posts)
    });

  }
  return state;
}
export default postReducer;
