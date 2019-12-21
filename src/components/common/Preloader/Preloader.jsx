import React from 'react';
import classes from './Preloader.module.css';
import preloader from '../../../assets/gif/preloader.gif';

const Preloader = () => {
    return <div className={classes.preloaderDiv}>
        <img src={preloader} alt={'preloader'} className={classes.preloader}/>
    </div>
};

export default Preloader;