import React from 'react';
import classes from './Message.module.css';


const Message = ({textMessage, name}) => {
    return (
        <div className={classes.message}>
            <div className={classes.messageAva}>
                <img src="http://gmk-05.ru/images/rukovoditeli2019/default_avatar.png" alt="Аватар" />
            </div>
            <div className={classes.messageTextBlock}>
                <span>{name}</span>
                <p>
                    {textMessage}
                </p>
            </div>
        </div>
    );
};

export default Message;