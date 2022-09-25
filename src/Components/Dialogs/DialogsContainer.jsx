import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody:(body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage:() => {
            dispatch(sendMessageCreator())
        },
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

