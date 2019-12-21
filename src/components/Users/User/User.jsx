import React from 'react';
import classes from './User.module.css';
import userPhoto from '../../../assets/images/s1200.webp';
import {NavLink} from "react-router-dom";

const User = (props) => {

    const isFetching = props.isFollowing.some(userId => userId === props.id);

    return (
        <div className={classes.user}>
            <div className={classes.first_block}>
                <NavLink to={'/profile/' + props.id} >
                    <img src={props.avatar || userPhoto} className={classes.avatar} alt={'Avatar'} />
                </NavLink>
                <button onClick={props.followed ? () => props.unfollowUser(props.id) : () => props.followUser(props.id)}
                        className={classes.follow_button + ' ' + (isFetching ? classes.disabled : '')}
                        disabled={isFetching}
                >
                    {props.followed ? 'unfollow' : 'follow'}
                </button>
            </div>
            <div className={classes.second_block}>
                <div className={classes.name_status}>
                    <span className={classes.name}>{props.name}</span>
                    <span className={classes.status}>
                        {props.status}
                    </span>
                </div>
                <div className={classes.location}>
                    <p className={classes.country}>Россия,</p>
                    <p className={classes.city}>Москва</p>
                </div>
            </div>
        </div>
    );
};

export default User;