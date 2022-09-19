import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.wall}>
                <img src="https://i.pinimg.com/originals/53/3e/6f/533e6f453782ba67b9a034dfc221a212.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

