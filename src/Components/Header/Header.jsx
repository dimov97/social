import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://freepngimg.com/save/119443-logo-akatsuki-pic-download-hq/2059x1425" alt=""/>
            <div className={s.title}><span>S</span>ocial-<span>N</span>etwork</div>
        </header>
    );
};

