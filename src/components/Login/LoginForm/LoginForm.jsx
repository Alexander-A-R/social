import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../../common/FormControls/FormControls";
import classes from './LoginForm.module.css';
import {compose} from "redux";
import {connect} from "react-redux";
import preloader from '../../../assets/gif/preloader.gif';


const LoginForm = (props) => {
    return (
        <div className={classes.formWrapper}>
            {props.isFetching && <img src={preloader} alt={'загрузка'} className={classes.preloader} />}
            <form onSubmit={props.handleSubmit}>
                {props.error && <div className={classes.formError}>
                    {props.error}
                </div>}
                <div className={classes.field}>
                    <Field placeholder={'логин'}
                           name={'email'}
                           validate={[required]}
                           component={Input}
                    />
                </div>
                <div className={classes.field}>
                    <Field placeholder={'пароль'}
                           name={'password'}
                           type={'password'}
                           validate={[required]}
                           component={Input}
                    />
                </div>
                <div className={`${classes.field} ${classes.checkbox}`}>
                    <Field type="checkbox"
                           name={'rememberMe'}
                           component={'input'}
                    /> Запомнить меня
                </div>
                <div>
                    <button className={classes.submitButton}>Войти</button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isFetching: state.auth.isFetching
    };
};

export default compose(
    reduxForm({form: 'login'}),
    connect(mapStateToProps)
)(LoginForm);