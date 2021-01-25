import React from "react";
import {connect} from "react-redux";
import {
    follow, unfollow,
    getUsers, setCurrentPage,
    toggleIsFetching,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
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
        setCurrentPage,
        toggleIsFetching,
        getUsers
    }
)(UsersContainer);
