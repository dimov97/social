const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
    users: [
        /*{id:1,photo:'http://cdn.onlinewebfonts.com/svg/img_264570.png',followed:false,fullName:'Ihor',status:'i am a boss',location:{city:'Minsk',country:'Belarus'}},
        {id:2,photo:'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',followed:true,fullName:'Max',status:'i am a worker',location:{city:'Moscow',country:'Russia'}},
        {id:3,photo:'https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360',followed:false,fullName:'Ivan',status:'i am a driver',location:{city:'Kiev',country:'Ukraine'}},*/
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage:1,
}

export const usersReducer = (state=initialState, action)=> {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id===action.userId) {
                        return {...u,followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id===action.userId) {
                        return {...u,followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {...state,users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state,currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state,totalUsersCount: action.count}
        }
        default:
            return state

    }
}

export const followAC = (userId) => ({type:FOLLOW, userId})
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId})
export const setUsersAC = (users) => ({type:SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount})