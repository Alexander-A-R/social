import React from 'react';
import classes from "./Users.module.css";
import UsersPagination from "./UsersPagination/UsersPagination";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";


const Users = (props) => {
    return (
        <div className={classes.users}>
            {props.isFetching && <Preloader />}
            <UsersPagination pagesCount={props.pagesCount}
                             pageSize={props.pageSize}
                             currentPage={props.currentPage}
                             switchPage={props.switchPage}
            />
            {props.users.map((user, index) => <User id={user.id}
                                                         name={user.name}
                                                         avatar={user.photos.small}
                                                         status={user.status}
                                                         followed={user.followed}
                                                         isFollowing={props.isFollowing}
                                                         key={index}
                                                         followUser={props.followUser}
                                                         unfollowUser={props.unfollowUser}
            />)}
        </div>
    );
};

export default Users;