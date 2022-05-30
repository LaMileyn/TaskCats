import React, {FC} from 'react';
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import cx from 'classnames';

const Header : FC = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header__wrapper}>
                <nav className={s.header__nav}>
                    <NavLink to='/allCats' className={ ({isActive }) => isActive ? cx(s.header__btn,s['header__btn-active']) : s.header__btn }><button>Все котики</button></NavLink>
                    <NavLink to='/favouriteCats' className={ ({isActive }) => isActive ? cx(s.header__btn,s['header__btn-active']) : s.header__btn }><button >Любимые котики</button></NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;