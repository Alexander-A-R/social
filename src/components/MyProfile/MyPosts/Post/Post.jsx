import React from 'react';
import classes from './Post.module.css';

const Post = ({text, imageUrl, countLikes = 0}) => {
    return (
        <div className={classes.post}>
            <p className={classes.text}>{text}</p>
            <img src={imageUrl} alt=""/>
            <div>
                <span className={classes.likes}> {countLikes}</span>
            </div>
        </div>
    );
};

export default Post;