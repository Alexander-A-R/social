import React from 'react';
import classes from './FormControls.module.css';


export const Input = ({input, meta, ...props}) => {
    const isError = Boolean(meta.touched && meta.error);
    return (
        <div className={`${classes.formControls} ${isError && classes.error}`}>
            <input {...input} {...props}/>
            {isError && <span className={classes.errorMessage}>{meta.error}</span>}
        </div>
    )
};