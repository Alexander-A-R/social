import React from 'react';
import classes from './Post.module.css';

const Post = ({text}) => {
    return (
        <div className={classes.post}>
            <img src="https://a.d-cd.net/ca7c0bcs-960.jpg" alt=""/>
            <p className={classes.text}>{text}</p>
        </div>
    );
};

export default Post;