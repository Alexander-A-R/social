import React from 'react';
import classes from "./MessageSender.module.css";
import {Field, reduxForm} from "redux-form";

const MessageSender = (props) => {

    return (
        <div className={classes.message}>
            <form onSubmit={props.handleSubmit}>
                <Field component={'textarea'}
                       name={'message'}
                       className={classes.message__text}
                       placeholder={'Текст сообщения...'}
                />
                <div className={classes.message__buttons}>
                    <button className={classes.button_send}>
                        Отправить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({form: 'message'})(MessageSender);