import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {

    const [srcAvatar, setAvatar] = useState('http://gmk-05.ru/images/rukovoditeli2019/default_avatar.png');

    const changeClick = () => {

        const url = prompt('Введите Url картинки:');

        if (url) {
            setAvatar(url);
        }
    };

    return (
        <div className={classes.profileInfo}>
            <div className={classes.avatar}>
                <img src={srcAvatar} alt={''}/>
                <button onClick={changeClick}>Загрузить</button>
            </div>
            <div className={classes.info}>
                <p>Имя: Александр</p>
                <p>Фамилия: Радионов</p>
                <p>Дата Рождения: 19 января 1989г</p>
            </div>
        </div>
    );
};

export default ProfileInfo;