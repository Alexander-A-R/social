import React, {useEffect} from 'react';
import LoginForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {loginUser} from "../../redux/auth-reducer";
import {compose} from "redux";
import {Redirect, withRouter} from "react-router-dom";


const Login = (props) => {
    useEffect(() => {
        document.title = 'Вход в соцсеть';
    });

    const submitLogin = (formData) => {
        const {email, password, rememberMe} = formData;
        props.loginUser(email, password, rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={`/profile/${props.userId}`} />
    }

    return (
        <div>
            <LoginForm onSubmit={submitLogin} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    };
};

export default compose(
    connect(mapStateToProps, {loginUser}),
    withRouter
)(Login);