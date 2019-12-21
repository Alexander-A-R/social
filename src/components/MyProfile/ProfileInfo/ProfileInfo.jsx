import React from 'react';
import classes from './ProfileInfo.module.css';
import defaultPhoto from '../../../assets/images/s1200.webp';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = ({userProfile, isFetching, status, putStatus}) => {

    const getPhoto = () => {
        if (userProfile) {
            return userProfile.photos.large || defaultPhoto;
        }
        else return defaultPhoto;
    };

    return (
        <div className={classes.profileInfo}>
            {isFetching && <Preloader />}
            <div className={classes.avatar}>
                <img src={getPhoto()} alt={'Avatar'} />
                <div className={classes.avaMenu}>
                    <div className={classes.avaTooltip}>
                        <span>Загрузить фото</span>
                    </div>
                </div>
            </div>
            <div className={classes.info}>
                <ProfileStatus status={status} putStatus={putStatus} />
                <p className={classes.info_name}>{userProfile && userProfile.fullName}</p>
                <p>Поиск работы: {userProfile && userProfile.lookingForAJobDescription}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;