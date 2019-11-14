import React, {useState} from 'react';
import './AddPost.module.css';
import classes from "./AddPost.module.css";

const AddPost = () => {

    const [height, setHeight] = useState(2);

    const postFocus = () => {
        setHeight(classes.height);
    };

    const postBlur = () => {
        setHeight(null);
    };

    return (
        <div className={classes.addPost}>
                <textarea className={`${classes.postText} ${height}`}
                          name='post-text'
                          id='post'
                          placeholder='Что у Вас нового?'
                          onFocus={postFocus}
                          onBlur={postBlur}
                />
            <button className={classes.postButton}>Add Post</button>
        </div>
    );
};

export default AddPost;