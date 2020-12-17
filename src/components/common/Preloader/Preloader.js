import s from "../../Users/Users.module.css";
import preloader from "../../../assets/img/loader.gif";
import React from "react";

let Preloader = (props)=>{
    return(
        <>
        {props.isFetching ?
            <div className={s.preloader}>
            <img src={preloader}
                 alt="loader"

            />
        </div> : null
        }
        </>
    )
}
export default Preloader;