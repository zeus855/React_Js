import { GET_POSTS, EDIT_POST, ADD_POST } from "../actions/post_action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    // _ajout_____________________________________

    case ADD_POST:
      return [action.payload, ...state];
    case EDIT_POST:
      return state.map(post => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            content: action.payload.content
          };
        } else return post;
      });
    // ______________________________________

    default:
      return state;
  }
}
