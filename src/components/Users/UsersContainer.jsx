import React from 'react';
import {connect} from "react-redux";
import {clearUsers, setCurrentPage, getUsers, followUser, unfollowUser} from "../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";


class UsersContainer extends React.Component {

    componentDidMount = () => {
        document.title = 'Пользователи';
        this.props.getUsers();
    };

    componentWillUnmount = () => {
        this.props.clearUsers();
        this.props.setCurrentPage(1);
    };

    switchPage = (page) => {
        this.props.getUsers(this.props.pageSize, page);
    };

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        return (
            <Users users={this.props.users}
                   pagesCount={pagesCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   isFetching={this.props.isFetching}
                   isFollowing={this.props.isFollowing}
                   switchPage={this.switchPage}
                   followUser={this.props.followUser}
                   unfollowUser={this.props.unfollowUser}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
    };
};

export default compose(connect(mapStateToProps, {
    clearUsers,
    setCurrentPage,
    getUsers,
    followUser,
    unfollowUser
}))(UsersContainer);