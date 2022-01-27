import React from 'react';
import s from './Header.module.scss';
type HeaderPropsType = {
    title: string
}
export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header__logo}>
                <img src="https://www.renaultgroup.com/wp-content/uploads/2021/03/nouveau_logo_renault_banner.jpg"
                     alt=''/>
            </div>
            <div className={s.header__title}>
                {props.title}
            </div>

        </header>
    );
}