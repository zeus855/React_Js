import { GET_POSTS } from "../actions/post_action";

const initialState = { };



export default function postReducer(state= initialState, action){
    switch (action.type) {
        case GET_POSTS:
            return action.playload;
        default:
            return state;
    }
    
}