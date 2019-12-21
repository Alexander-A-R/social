import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const MyProfile = (props) => {

    return (
        <div>
            <ProfileInfo userProfile={props.userProfile} isFetching={props.isFetching} status={props.status} putStatus={props.putStatus} />
            <MyPostsContainer />
        </div>

    );
};

export default MyProfile;