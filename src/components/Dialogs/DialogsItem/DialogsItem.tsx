import React from 'react';
import s from '../Dialogs.module.scss';
import {NavLink} from 'react-router-dom';
import {ActionsType, fakeDialogsAC} from '../../../redux/state';

type DialogPropsType = {
    name: string,
    id: string,
    dispatch: (action: ActionsType) => void
}

const DialogsItem = (props: DialogPropsType) => {
    return <NavLink onClick={() => props.dispatch(fakeDialogsAC())} activeClassName={s.active}
                    to={`/social-network/dialogs/${props.id}`}>{props.name}</NavLink>
}

export default DialogsItem

