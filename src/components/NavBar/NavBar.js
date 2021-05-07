import React from "react";
import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserAlt,
    faEnvelope,
    faUsers,
    faRss,
    faMusic,
    faCog




} from "@fortawesome/free-solid-svg-icons";


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
                <NavLink to="/profile" activeClassName={s.active}>
                    <FontAwesomeIcon icon={faUserAlt} />Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>
                    <FontAwesomeIcon icon={faEnvelope} /> Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>
                    <FontAwesomeIcon icon={faUsers} /> Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>
                    <FontAwesomeIcon icon={faRss} /> News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>
                    <FontAwesomeIcon icon={faMusic} /> Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>
                    <FontAwesomeIcon icon={faCog} /> Settings</NavLink>
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
