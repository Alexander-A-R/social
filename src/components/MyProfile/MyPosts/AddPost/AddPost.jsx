import React, {useState} from 'react';
import classes from "./AddPost.module.css";
import {Field, reduxForm} from "redux-form";


const AddPost = (props) => {

    const [height, setHeight] = useState(2);

    const postFocus = (e) => {
        setHeight(classes.height);
    };

    const postBlur = (e) => {
        setHeight('');
    };

    const addPicture = (e) => {
        e.preventDefault();
        const imageUrl = prompt('Введите url картинки:');
        props.changePostImage(imageUrl);
    };

    return (
        <div className={classes.addPost}>
            <form onSubmit={props.handleSubmit}>
                <Field component={'textarea'}
                       name='postText'
                       placeholder='Что у Вас нового?'
                       className={`${classes.postText} ${height}`}
                       onFocus={postFocus}
                       onBlur={postBlur}
                />
                <button className={classes.postButton}
                        onClick={addPicture}
                        onMouseDown={(e) => e.preventDefault()}
                >
                    Фото
                </button>
                <input className={classes.postButton}
                       type={'submit'}
                       onMouseDown={(e) => e.preventDefault()}
                       value={'Опубликовать'}
                />
            </form>
        </div>
    );
};

export default reduxForm({form: 'post'})(AddPost);