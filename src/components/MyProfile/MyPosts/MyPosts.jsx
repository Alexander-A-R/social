import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import AddPost from "./AddPost/AddPost";

const MyPosts = () => {
    return (
        <div className={classes.post}>
            <AddPost />
            <Post text={'Honda Civic VI'}/>
        </div>
    );
};

export default MyPosts;