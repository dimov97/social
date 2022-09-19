const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi, how are you ?', likesCount:12},
                {id: 2, message: 'this is my first post !',likesCount:25},
            ],
            newPostText:'dwore in state'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'how is your life ?'},
                {id: 3, message: 'yo'},
            ],
            dialogs: [
                {id: 1, name: 'Ihor'},
                {id: 2, name: 'Max'},
                {id: 3, name: 'Anton'},
                {id: 4, name: 'Nikolay'}
            ],
            newMessageBody:''
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount:0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type===UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type===UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type===SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 4, message: body})
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = ()=> {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text)=> {
    return {
        type: UPDATE_NEW_POST_TEXT, newText:text
    }
}
export const sendMessageCreator = ()=> {
    return {
        type:SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body)=> {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body:body
    }
}


export default store;
window.store = store