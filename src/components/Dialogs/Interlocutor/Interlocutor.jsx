import React from 'react';
import classes from './Interlocutor.module.css';
import {NavLink} from "react-router-dom";


const Interlocutor = ({name, id}) => {
    return (
        <NavLink to={`/dialogs/${id}`} className={classes.user}>
            <img src="http://gmk-05.ru/images/rukovoditeli2019/default_avatar.png" alt="Аватар" />
            <span>{name}</span>
        </NavLink>
    );
};

export default Interlocutor;