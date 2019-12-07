import React, {useState} from 'react';
import './AddPost.module.css';
import classes from "./AddPost.module.css";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";

const AddPost = (props) => {

    const [height, setHeight] = useState(2);
    const [postPicture, setPostPicture] = useState('');
    const refText = React.createRef();

    const postFocus = (e) => {
        setHeight(classes.height);
    };

    const postBlur = (e) => {
        setHeight(null);
    };

    const changeText = (e) => {
        const text = e.currentTarget.value;
        const action = updatePostTextActionCreator(text);
        props.dispatch(action);
    };

    const addPostClick = (e) => {
        const action = addPostActionCreator(postPicture);
        setPostPicture('');
        props.dispatch(action);
    };

    const addPicture = (e) => {
        setPostPicture(prompt('Введите url картинки:'));
    };

    return (
        <div className={classes.addPost}>
            <textarea className={`${classes.postText} ${height}`}
                          name='post-text'
                          id='post'
                          placeholder='Что у Вас нового?'
                          onFocus={postFocus}
                          onBlur={postBlur}
                          onChange={changeText}
                          ref={refText}
                          value={props.newPostText}
            />
            <button className={classes.postButton}
                    onClick={addPicture}
                    onMouseDown={(e) => e.preventDefault()}
            >
                Фото
            </button>
            <button className={classes.postButton}
                    onClick={addPostClick}
                    onMouseDown={(e) => e.preventDefault()}
            >
                Опубликовать
            </button>
        </div>
    );
};

export default AddPost;