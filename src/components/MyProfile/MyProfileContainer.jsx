import React from 'react';
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {getProfile, getStatus, putStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";


class MyProfileContainer extends React.Component {

    componentDidMount() {
        document.title = 'Профиль';
        const userId = this.props.match.params.userId;
        if (userId) {
            this.props.getProfile(userId);
            this.props.getStatus(userId);
        }
    }

    render() {
        if (!this.props.match.params.userId && !this.props.isAuth) {
            return <Redirect to={'/login'} />
        }
        return (
            <MyProfile userProfile={this.props.userProfile}
                       isFetching={this.props.isFetching}
                       status={this.props.status}
                       putStatus={this.props.putStatus}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        userProfile: state.profilePage.userProfile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth
    };
};

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, putStatus}),
    withRouter
)(MyProfileContainer);