import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        console.log('13123');
        return <Preloader isFetching='false'/>
    }
    return (
        <div>
            <div>
                <img src="https://apod.nasa.gov/apod/image/2008/PerseidBridge_Zhang_1080_annotated.jpg"
                     alt="img"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
         </div>
    );
};

export default ProfileInfo;
