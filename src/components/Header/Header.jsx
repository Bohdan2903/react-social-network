import React from 'react';
import s from'./Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/768px-VK.com-logo.svg.png" alt='img'/>
        <div className={'btn ' + s.loginBlock}>
            {props.isAuth ? props.login :
                <NavLink to={'/login'}>
                    Login
                </NavLink>
            }
        </div>
    </header>
    
  );
}

export default Header;
