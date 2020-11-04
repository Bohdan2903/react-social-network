import React from "react";
import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";


const NavBar = () => {
    let initialState = {
        sideBar: {
            friends: [
                {id: 1, name: "Petr", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'},
                {id: 2, name: "Tolao", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'},
                {id: 3, name: "Sveta", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'}
            ]
        }
    };
    let friend = initialState.sideBar.friends.map(f => <div key={f.id} className={s.friend}> {f.name}
    <img src={f.img} alt='img'/> </div>);

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <div className={s.friendsBlock}>
                    {friend}
                </div>

            </div>
        </nav>
    )
}

export default NavBar;
