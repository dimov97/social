import React from 'react';
import s from './Post.module.css';

export const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png" alt=""/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
};

