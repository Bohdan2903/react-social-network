import React from "react";
import s from "./Users.module.css";
import userPhoto from '../.././assets/img/user.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                                    <button className={'btn '} onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'e051ee3d-c160-4b6b-9d18-eca4f1e58f5b'
                                            }
                                        })
                                            .then(response => {
                                                if(response.resultCode ===0){

                                                    props.unfollow(user.id)
                                                }
                                            });
                                    }}>
                                        Unfollow
                                    </button>
                                    : <button className={'btn '} onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'e051ee3d-c160-4b6b-9d18-eca4f1e58f5b'
                                            }
                                        })
                                            .then(response => {
                                                if(response.resultCode ===0){

                                                    props.follow(user.id)
                                                }
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

