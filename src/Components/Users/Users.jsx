import React from 'react';
import s from './Users.module.css'

export const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photo: 'http://cdn.onlinewebfonts.com/svg/img_264570.png',
                followed: false,
                fullName: 'Ihor',
                status: 'i am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photo: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
                followed: true,
                fullName: 'Max',
                status: 'i am a worker',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photo: 'https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360',
                followed: false,
                fullName: 'Ivan',
                status: 'i am a driver',
                location: {city: 'Kiev', country: 'Ukraine'}
            },])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photo} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

