import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
    const path = '/dialogs/' + props.id
    return (
        <div >
            <NavLink className={s.item} to={path}>{props.name}</NavLink>
        </div>
    );
};

