import React from 'react';
import classes from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <section className={classes.sidebar}>
            <nav>
                <div className={classes.navMenu}>
                    <NavLink to='/profile'>Профиль</NavLink>
                    <NavLink to='/dialogs'>Сообщения</NavLink>
                    <NavLink to='/slider'>Слайдер</NavLink>
                    <a href="#">Новости</a>
                    <a href="#">Музыка</a>
                    <a href="#">Настройки</a>
                </div>
            </nav>
        </section>
    );
};

export default Sidebar;