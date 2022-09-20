const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 4, message: body})
            return state
        default:
            return state
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
export default dialogsReducer;