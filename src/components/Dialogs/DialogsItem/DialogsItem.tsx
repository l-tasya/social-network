import React from 'react';
import s from '../Dialogs.module.scss';
import {NavLink} from 'react-router-dom';
import {ActionsType} from '../../../redux/state';
import {fakeDialogsAC} from '../../../redux/dialogs-reducer';

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

