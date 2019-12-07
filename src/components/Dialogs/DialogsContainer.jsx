import React, {useState, useEffect} from 'react';
import classes from './Dialogs.module.css';
import Interlocutor from "./Interlocutor/Interlocutor";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";
import MessageSender from "./MessageSender/MessageSender";
import Dialogs from './Dialogs';
import StoreContext from "../../redux/storeContext";

const DialogsContainer = () => {

    return(
        <StoreContext>
            {
                store => {
                    useEffect(() => {
                        document.title = 'Сообщения';
                    });

                    return <Dialogs />
                }
            }
        </StoreContext>
    );
};

export default DialogsContainer;