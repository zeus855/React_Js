import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../actions/post_action";

const PostForm = () => {
  const form = useRef();
  const user = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const handleForm = async e => {
    e.preventDefault();

    const postData = {
      author: user.pseudo,
      title: form.current[0].value,
      content: form.current[1].value,
      likes: 0
    };

    // console.log("*************", postData);
    // console.log(form.current[1].value);

    // console.log("handleForm");

    await dispatch(addPost(postData));
    dispatch(getPosts());

    form.current.reset();
  };

  return (
    <div className="form_container">
      <form ref={form} onSubmit={e => handleForm(e)}>
        <input type="text" placeholder="Titre du post" />

        <textarea placeholder="Message" />

        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
