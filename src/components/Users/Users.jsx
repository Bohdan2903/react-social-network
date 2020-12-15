import React from "react";
import s from "./Users.module.css";
import userPhoto from '../.././assets/img/user.png';

let Users = (props) => {
    console.log(props)
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i<=pagesCount; i++){
        pages.push(i);
    }
    return(
    <div className={s.users}>
        <div>
            {pages.map(index => {
                return(
                    <button className={props.currentPage === index && s.selectedPage} onClick={(e)=>{props.onPageChanged(index)}}>{index}</button>
                )
            })}
        </div>
        {
            props.users.map( user =>
                <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto } className={s.userPhoto}/>
                        </div>
                        <div>
                          {user.followed ?
                              <button onClick={() => {props.unfollow(user.id)}}>
                                  Unfollow
                              </button>
                              : <button onClick={() => {props.follow(user.id)}}>
                                  Follow
                              </button>
                          }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div> {user.name}</div>
                            <div> {user.status}</div>
                        </span>
                        <div>
                            <div> kiev </div>
                            <div> Ukraine </div>
                        </div>
                    </span>
                </div>
            )
        }
    </div>
    )
}

export default Users;
