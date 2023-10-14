import React from 'react';
import {useState} from 'react';


const Likes = () => {
    const [likes, setLikes] = useState(0) ;
    const handleClick = () => {
        setLikes(likes+1)
    }
    return (
        <div>
            
        <img onClick={handleClick} src="./icons/clap.png" alt="likes"/>
            <h5>{likes}</h5>
        </div>
    );
};

export default Likes;