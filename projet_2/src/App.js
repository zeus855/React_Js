import React from 'react';

import User from './components/User';
import PostForm from "./components/PostForm";
import Post from './components/Post';
import { isEmpty } from './components/Utils';


import { useSelector } from 'react-redux';


const App = () => {
  const posts = useSelector(state => state.postReducer);
  console.log("-----", posts);
  return (
    <div>
    <h1>Wakfu</h1>

    <PostForm />

    <div className='content'>
    <div className='post-container'>

    {!isEmpty (posts) &&
     posts.map((post, index) => <Post post = {post} key={index} />  )}
    


    </div>
    <User />

    </div>
        
    </div>
  );
}

export default App;