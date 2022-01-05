import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.scss';
import {AlignLeft, MessageSquare, Music, Settings, User, Users} from 'react-feather';

const Navbar = () => {
    return (
        <div className={s.wrapper}>
            <nav className={s.nav}>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/social-network/profile'>
                    <User/>
                    <span>Profile</span>
                </NavLink>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/social-network/users'>
                    <Users/>
                    <span>Users</span>
                </NavLink>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/social-network/dialogs'>
                    <MessageSquare/>
                    <span>Dialogs</span>
                </NavLink>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/social-network/feed'>
                    <AlignLeft/>
                    <span>News</span>
                </NavLink>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/social-network/audio'>
                    <Music/>
                    <span>Music</span>
                </NavLink>
                <NavLink activeClassName={s.active} className={s.nav__button} to='/social-network/settings'>
                    <Settings/>
                    <span>Settings</span>
                </NavLink>
            </nav>
        </div>
    )
}
export default Navbar;