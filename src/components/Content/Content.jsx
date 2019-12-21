import React from 'react';
import classes from './Content.module.css';
import {Redirect, Route, withRouter} from 'react-router-dom';
import SliderPage from '../SliderPage/SliderPage';
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import MyProfileContainer from "../MyProfile/MyProfileContainer";
import Login from "../Login/Login";
import {connect} from "react-redux";
import GameXO from "../GameXO/GameXO";
import {compose} from "redux";


const Content = (props) => {
    if (props.isAuth && props.location.pathname === '/') {
        return <Redirect to={`/profile/${props.userId}`} />
    }
    else if (!props.isAuth && props.location.pathname === '/') {
        return <Redirect to={'/login'} />
    }

    return (
        <section className={classes.content}>
            <Route path={'/profile/:userId?'} render={() => <MyProfileContainer />} />
            <Route path={'/dialogs'} render={() => <DialogsContainer />} />
            <Route path={'/users'} render={() => <UsersContainer />} />
            <Route path={'/slider'} component={SliderPage} />
            <Route path={'/login'} component={Login} />
            <Route path={'/game'} component={GameXO} />
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    };
};

export default compose(
    connect(mapStateToProps),
    withRouter
)(Content);