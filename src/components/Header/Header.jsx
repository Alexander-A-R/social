import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/logo.png';
import MenuItem from "./MenuItem/MenuItem";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <nav>
                <div className={classes.navbar}>
                    <a href="#">Home</a>
                    <MenuItem name={'Projects'}/>
                    <a href="#">Gallery</a>
                    <a href="#">Docs</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;