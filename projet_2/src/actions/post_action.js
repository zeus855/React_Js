
import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";
export const EDIT_POSTS = "EDIT_POSTS";

//get posts ____________________________________

export const getPosts = () => {
  return dispatch => {
    return axios.get("http://localhost:3000/posts").then(res => {
      dispatch({ type: GET_POSTS, playload: res.data });
    });
  };
};

//add post _________________________________

export const addPosts = data => {
  return dispatch => {
    return axios.post("http://localhost:3000/posts", data).then(res => {
      dispatch({ type: ADD_POSTS, playload: data });
    });
  };
};
//modifie post _________________________________

export const editPost = data => {
  return dispatch => {
    return axios
      .put(` http://localhost:3000/posts/${data.id}`, data)
      .then(res => {
        dispatch({ type: EDIT_POSTS, playload: data });
      });
  };
};