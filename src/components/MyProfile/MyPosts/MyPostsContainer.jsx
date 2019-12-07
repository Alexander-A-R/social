import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import AddPost from "./AddPost/AddPost";

const MyPosts = ({posts, textPost, dispatch}) => {
    return (
        <div className={classes.post}>
            <AddPost dispatch={dispatch} text={textPost}/>
            {posts.map((post, index) => <Post key={index}
                                              text={post.text}
                                              imageUrl={post.imageUrl}
                                              countLikes={post.countLikes}/>)}
        </div>
    );
};

export default MyPosts;