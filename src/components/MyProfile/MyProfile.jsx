import React from 'react';
import './style.css';
import honda from "../../assets/honda.jpg";

const MyProfile = () => {
    return (
        <header>
            <div className={'head-image'}>
                <img src={honda} alt="honda"/>
            </div>
        </header>
    );
};

export default MyProfile;