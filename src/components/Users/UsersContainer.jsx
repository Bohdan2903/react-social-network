import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching, toggleFollowingProgressing
} from "../../redux/users-reducer";
import Users from "./Users"
import Preloader from "../common/Preloader/Preloader";
import {usersAPI as userAPI} from "../../Api/Api";

class UsersContainer extends  React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return (
            <>
                <Preloader isFetching={this.props.isFetching}/>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingProgressing={this.props.followingProgressing}
                       toggleFollowingProgressing={this.props.toggleFollowingProgressing}

                />
            </>
        )
    }
}
let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgressing: state.usersPage.followingProgressing
    }
}


export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingProgressing
    }
    )(UsersContainer);
