import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, updateNewPostText} from "../../Redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";

export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

