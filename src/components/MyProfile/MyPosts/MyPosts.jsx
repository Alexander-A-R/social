import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import AddPost from "./AddPost/AddPost";

const MyPosts = ({changePostImage, onSubmitAddPost, posts}) => {
    return (
        <div className={ classes.post }>
            <AddPost changePostImage={changePostImage}
                     onSubmit={onSubmitAddPost}
            />
            {posts.map((post, index) => <Post key={index}
                                              text={post.text}
                                              imageUrl={post.imageUrl}
                                              countLikes={post.countLikes}/>)}
        </div>
    );
};

export default MyPosts;