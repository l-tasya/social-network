import {
    DialogsType,
    fakeDialogsAC,
    MessagesType,
    sendMessageAC
} from '../../redux/dialogs-reducer';
import {AppStateType} from '../../redux/store/redux-store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


type MapStatePropsType = {
    dialogItems: DialogsType
    dialogMessages: MessagesType

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogItems: state.dialogsPage.dialogs,
        dialogMessages: state.dialogsPage.messages
    }
}
// type MapDispatchPropsType = {
//     onSentButtonClick: () => void
//     onInputChange: (newValue: string) => void
//     onDialogItemClick: () => void
// }
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         onSentButtonClick: () => {
//             dispatch(sendMessageAC())
//         },
//         onInputChange: (e: ChangeEvent<HTMLInputElement>) => {
//             dispatch(dialogInputChangeAC(`${e.currentTarget.value}`))
//         },
//         onDialogItemClick: () => {
//             dispatch(fakeDialogsAC())
//         }
//     }
// }

const DialogsContainer = connect(
    mapStateToProps,
    {
        onSentButtonClick: sendMessageAC,
        onDialogItemClick: fakeDialogsAC
    }
)(Dialogs)

export default DialogsContainer

