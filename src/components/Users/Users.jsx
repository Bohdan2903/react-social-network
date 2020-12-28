import React from "react";
import s from "./Users.module.css";
import userPhoto from '../.././assets/img/user.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followAPI} from "../../Api/Api";
import {followingProgressing, toggleFollowingProgressing} from "../../redux/users-reducer";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    let indexPage = props.currentPage;
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.users}>
            <div>
                {pages.map(index => {
                        return (
                            <button className={props.currentPage === index ? s.selectedPage : ''} onClick={(e) => {
                                props.onPageChanged(index)
                            }}>{index}</button>
                        )
                })}
            </div>
            {
                props.users.map(user =>
                    <div key={user.id} className={s.userBlock}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                             className={s.userPhoto} alt='userphoto'/>

                        <div className={s.userBody}>
                            <NavLink to={'/profile/' + user.id}>
                                 {user.name}
                            </NavLink>
                            {!user.status ? '' :<div> {user.status} </div>}
                            <div>
                                <div> kiev</div>
                                <div> Ukraine</div>
                            </div>
                            <div>
                                {user.followed ?
                                    <button disabled={props.followingProgressing.some(id=> id===user.id)} className={'btn '} onClick={() => {
                                        props.toggleFollowingProgressing(true, user.id)
                                        followAPI.getFollow(true, user.id)
                                            .then(data => {
                                                if(data.resultCode === 0){
                                                    props.unfollow(user.id)
                                                }
                                                props.toggleFollowingProgressing(false, user.id);
                                            });
                                    }}>
                                        Unfollow
                                    </button>
                                    : <button disabled={props.followingProgressing.some(id=> id===user.id)}  className={'btn '} onClick={() => {
                                        props.toggleFollowingProgressing(true, user.id);
                                        followAPI.getFollow(false, user.id)
                                            .then(data => {
                                                if(data.resultCode === 0){
                                                    props.follow(user.id)
                                                }
                                                props.toggleFollowingProgressing(false, user.id);
                                            });
                                    }}>
                                        Follow
                                    </button>
                                }
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default Users;

