import React, {FC} from 'react';
import spinner from './../../files/spinnerLoader.gif'
import s from './Loader.module.scss'
const Loader : FC = (props) => {
    return (
        <img className={s.loader} src={spinner} alt="ddddd"/>
    );
}

export default Loader;