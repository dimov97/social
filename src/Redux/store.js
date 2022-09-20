import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
        sidebar:{}
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


        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)


    }
}





export default store;
window.store = store