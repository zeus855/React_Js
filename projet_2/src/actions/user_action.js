import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = () => {
    return dispatch => {
        return axios.get("http://localhost:3000/user").then(res => {
            console.log(res.data[0]);
            dispatch({ type: GET_USER, playload: res.data[0] });
        })
    }
}
