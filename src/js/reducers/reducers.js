import { ADD_POST, FETCH_POST, EDIT_POST } from "../constants/action-types";
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
  if (action.type === EDIT_POST) {
    return  Object.assign({}, state, {
      posts: state.posts.map((post)=> {if (post.date===action.payload.date) {return action.payload} else return post})
    });
  }
  return state;
}
export default postReducer;
