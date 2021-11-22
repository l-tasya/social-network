import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.scss';
import {AlignLeft, MessageSquare, Music, Settings, User} from 'react-feather';

const Navbar = () => {
    return (
        <div className={s.wrapper}>
            <nav className={s.nav}>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/profile'>
                    <User/>
                    <span>Profile</span>
                </NavLink>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/dialogs'>
                    <MessageSquare/>
                    <span>Dialogs</span>
                </NavLink>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/feed'>
                    <AlignLeft/>
                    <span>News</span>
                </NavLink>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/audio'>
                    <Music/>
                    <span>Music</span>
                </NavLink>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/settings'>
                    <Settings/>
                    <span>Settings</span>
                </NavLink>
            </nav>
        </div>
    )
}
export default Navbar;