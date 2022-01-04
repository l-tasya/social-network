import React, {ChangeEvent} from 'react';
import {
    dialogInputChangeAC,
    DialogsType,
    fakeDialogsAC,
    MessagesType,
    sendMessageAC
} from '../../redux/dialogs-reducer';
import {AppStateType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';


type MapStatePropsType = {
    error: null | string
    newMessageText: string
    dialogItems: DialogsType
    dialogMessages: MessagesType

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        error: state.dialogsPage.error,
        newMessageText: state.dialogsPage.newMessageText,
        dialogItems: state.dialogsPage.dialogs,
        dialogMessages: state.dialogsPage.messages
    }
}
type MapDispatchPropsType = {
    onSentButtonClick: () => void
    onEnterKeyPress: (e: React.KeyboardEvent) => void
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onDialogItemClick: () => void
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onSentButtonClick: () => {
            dispatch(sendMessageAC())
        },
        onEnterKeyPress: (e: React.KeyboardEvent) => {
            e.key === 'Enter' && dispatch(sendMessageAC())
        },
        onInputChange: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(dialogInputChangeAC(`${e.currentTarget.value}`))
        },
        onDialogItemClick: () => {
            dispatch(fakeDialogsAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

