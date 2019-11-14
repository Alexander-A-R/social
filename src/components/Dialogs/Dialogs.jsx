import React from 'react';
import classes from './Dialogs.module.css';
import Interlocutor from "./Interlocutor/Interlocutor";
import Message from "./Message/Message";

const Dialogs = ({interlocutors, messages}) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.messages}>
                {messages.map(({name, message}, index) => <Message name={name} textMessage={message} key={index}/>)}
            </div>
            <div className={classes.users}>
                {interlocutors.map( ({name, id}, index) => <Interlocutor name={name} id={id} key={index}/>)}
            </div>
        </div>
    );
};

export default Dialogs;