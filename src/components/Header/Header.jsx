import React, {useState} from 'react';
import classes from './Header.module.css';
import logo from '../../assets/logo.png';
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login, logoutUser}) => {
    const [logoutMenu, setLogoutMenu] = useState(false);

    const onClickLogout = () => {
        setLogoutMenu(!logoutMenu);
        logoutUser();
    };

    const onClickLogoutMenu = (e) => {
        if (e.currentTarget !== e.target) {
            setLogoutMenu(!logoutMenu);
        }
    };

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={classes.login}>
                {isAuth && <span onClick={() => setLogoutMenu(!logoutMenu)} className={classes.loginUser}  >
                    {login}
                </span>}
                {isAuth || <NavLink to='/login'>
                    Войти
                </NavLink>}
                {logoutMenu && <div className={classes.logoutMenu} onClick={onClickLogoutMenu}>
                    <span onClick={onClickLogout}>Выйти</span>
                </div>}
            </div>
        </header>
    );
};

export default Header;