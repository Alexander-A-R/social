import React, {useEffect} from 'react';
import classes from './Dialogs.module.css';
import Interlocutor from "./Interlocutor/Interlocutor";
import Message from "./Message/Message";
import MessageSender from "./MessageSender/MessageSender";


const Dialogs = ({messages, interlocutors, sendMessage}) => {
    useEffect(() => {
        document.title = 'Сообщения';
    });

    const onSubmitMessage = (formData) => {
        sendMessage(formData.message);
    };

    return (
        <div className={classes.dialogs}>
            <div>
                <div className={classes.messages}>
                    {messages.map(({name, message}, index) => <Message name={name}
                                                                       textMessage={message}
                                                                       key={index}/>)}
                </div>
                <MessageSender onSubmit={onSubmitMessage} />
            </div>
            <div className={classes.users}>
                {interlocutors.map( ({name, id}, index) => <Interlocutor name={name} id={id} key={index}/>)}
            </div>
        </div>
    );
};

export default Dialogs;