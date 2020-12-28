import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAction} from "../../redux/profile-reducer";
import { withRouter } from "react-router";

class ProfilesContainer extends  React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId  = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfileAction(response.data);
            });
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainer = withRouter(ProfilesContainer);

 export default connect(mapStateToProps,
     {setUserProfileAction})(WithUrlDataContainer);