import { GET_USER } from "../actions/user_action";

const initialState = { };





export default function userReducer(state= initialState, action){
    switch (action.type) {
        case GET_USER:
            return action.playload;
        default:
            return state;
    }
    
}