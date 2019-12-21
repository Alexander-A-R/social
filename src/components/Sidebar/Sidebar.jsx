import React from 'react';
import classes from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Sidebar = (props) => {
    return (
        <section className={classes.sidebar}>
            <nav>
                <div className={classes.navMenu}>
                    <NavLink to={`/profile/${props.myId || ''}`}>Мой профиль</NavLink>
                    <NavLink to='/dialogs'>Сообщения</NavLink>
                    <NavLink to='/users'>Пользователи</NavLink>
                    <NavLink to='/slider'>Слайдер</NavLink>
                    <NavLink to='/news'>Новости</NavLink>
                    <NavLink to='/music'>Музыка</NavLink>
                    <NavLink to='/game'>Игра</NavLink>
                    <NavLink to='/settings'>Настройки</NavLink>
                </div>
            </nav>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        myId: state.auth.userId
    };
};

export default connect(mapStateToProps, null)(Sidebar);