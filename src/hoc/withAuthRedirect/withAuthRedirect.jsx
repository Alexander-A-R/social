import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const withAuthRedirect = (Component) => {
    const ContainerComponent = (props) => {
        if (!props.isAuth) {
            return <Redirect to='/login' />
        }
        else {
            return <Component {...props} />
        }
    };

    return connect((state) => ({isAuth: state.auth.isAuth}))(ContainerComponent);
};

export default withAuthRedirect;