import React from 'react';
import classes from './MyProfile.module.css';
import honda from '../../assets/honda.jpg';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const MyProfile = () => {
    return (
        <div>
            <header className={classes.headImage}>
                <img src={honda} alt="honda"/>
            </header>
            <ProfileInfo />
            <MyPosts />
        </div>

    );
};

export default MyProfile;