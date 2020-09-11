import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://apod.nasa.gov/apod/image/2008/PerseidBridge_Zhang_1080_annotated.jpg"
          alt="img"
        />
      </div>
      <div className={s.descriptionBlock}> ava + descr</div>
    </div>
  );
};

export default ProfileInfo;
