import React from 'react';
import './style.css';

const Sidebar = () => {
    return (
        <div className={'sidebar'}>
            <nav>
                <div className={'navMenu'}>
                    <a href="#">Profile</a>
                    <a href="#">Messages</a>
                    <a href="#">News</a>
                    <a href="#">Music</a>
                    <a href="#">Settings</a>
                </div>
            </nav>
        </div>

    );
};

export default Sidebar;