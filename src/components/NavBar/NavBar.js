import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
const NavBar = (props) => {
  let friend = props.state.friend.map(f => <div key={f.id} className={s.friend}> {f.name} <img src={f.img} alt='img' />  </div>);
  console.log(friend);
  return (
    
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/Profile" activeClassName ={s.active}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Dialogs" activeClassName ={s.active}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Users" activeClassName ={s.active}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/News"activeClassName ={s.active}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Music"activeClassName ={s.active}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Settings"activeClassName ={s.active}>Settings</NavLink>
      </div>
      <div className={s.item}>
        <div className={s.friendsBlock}>
           {friend}
        </div>
         
      </div>
    </nav>
  );
};

export default NavBar;
