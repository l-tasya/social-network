import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.scss';

const Navbar = () => {
    return (
        <div className={s.wrapper}>
            <nav className={s.nav}>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/profile'><img className={s.nav__img}
                                                                                                 src="http://uitheme.net/sociala/images/profile-4.png"
                                                                                                 alt=""/>Profile</NavLink>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/dialogs'><img className={s.nav__img}
                                                                                                 src="http://uitheme.net/sociala/images/profile-4.png"
                                                                                                 alt=""/>Dialogs</NavLink>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/feed'><img className={s.nav__img}
                                                                                              src="http://uitheme.net/sociala/images/profile-4.png"
                                                                                              alt=""/>News</NavLink>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/audio'><img className={s.nav__img}
                                                                                               src="http://uitheme.net/sociala/images/profile-4.png"
                                                                                               alt=""/>Music</NavLink>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/settings'><img className={s.nav__img}
                                                                                                  src="http://uitheme.net/sociala/images/profile-4.png"
                                                                                                  alt=""/>Settings</NavLink>
            </nav>
        </div>
    )
}
export default Navbar;