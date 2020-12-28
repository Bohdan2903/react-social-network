import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader isFetching='false'/>
    }
    return (
        <div>
            <div>
                <img src="https://apod.nasa.gov/apod/image/2008/PerseidBridge_Zhang_1080_annotated.jpg"
                     alt="img"/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.descriptionBlockTitle}>
                    <div>{props.profile.fullName}</div>
                    <img src={props.profile.photos.large} className={s.avatarImg} alt=""/>
                    {props.profile.lookingForAJob ? <div> Looking for work </div>: ''}
                </div>

                <div>{props.profile.aboutMe}</div>
            </div>
         </div>
    );
};

export default ProfileInfo;
