import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isEmpty } from "./Utils";

import { editPost } from "../actions/post_action";
import { deletePost } from "../actions/post_action";

import Likes from "./Likes";

const Post = ({ post }) => {
  const [editContent, setEditContent] = useState();
  const [editToggle, setEditToggle] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer);
  const [deleteContent, setDeleteContent] = useState();
  const [deleteToggle, setDeleteToggle] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();

    const postData = {
      author: user.pseudo,
      title: post.title,
      likes: post.likes,
      id: post.id,
      content: editContent,
    };
    dispatch(editPost(postData));
    setEditToggle(false);

    console.log(postData);
  };

  const handleDelete = (id) => {
    
    const postData = {
      author: user.pseudo,
      title: post.title,
      likes: post.likes,
      id: post.id,
      content: deleteContent,
    };
    dispatch(deletePost(postData));
    setDeleteToggle(true);

    console.log(postData);

  }

  return (
    <div className="post">
      {!isEmpty(user) && user.pseudo === post.author && (
        <div className="edit_delete">
        
          <img
            src="./icons/edit.svg"
            alt="edit"
            onClick={() => setEditToggle(!editToggle)}
            
          />
          

          <img src="./icons/delete.svg" alt="delete" onClick={() => setDeleteToggle(!deleteToggle)} />
          
        </div>
      )}

      <h2>{post.title}</h2>

      <img
        src="https://picsum.photos/1500/400"
        alt="post"
        className="post_img"
      />

      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <textarea
            autoFocus={true}
            defaultValue={post.content}
            onChange={(e) => setEditContent(e.target.value)}
          />

          <input type="submit" value=" valider modification " />
        </form>
      ) : (
        <p>{post.content}</p>
      )}

      {deleteToggle ? (
        <form onSubmit={(id) => handleDelete(id)}>
          <textarea
            autoFocus={true}
            defaultValue={post.content}
            onChange={(id) => setDeleteContent(id)}
          />

          <input type="submit" value=" Valider suppression " />
        </form>
      ) : (
        <p>{post.content}</p>
      )}
      
      <h5 className="author">{post.author}  <Likes /> </h5>
      
    </div>
  );
};

export default Post;