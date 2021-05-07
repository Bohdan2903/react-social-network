import React from "react";
// import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({editMode: false})
    }
    deactivateEditMode = () => {
        this.setState({editMode: true})
        this.props.updateStatus(this.state.status)
    }


    onStatusChange = e => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <>
                <div>
                    {this.state.editMode ? (
                        <span className={'status'} onClick={this.activateEditMode}>{this.props.status || 'no status'}</span>) :
                        (
                        <input className={'status'} autoFocus={true} onChange={this.onStatusChange}
                               value={this.state.status} onBlur={this.deactivateEditMode}
                        />
                        )
                    }
                </div>
            </>

        );
    }
}

export default ProfileStatus
