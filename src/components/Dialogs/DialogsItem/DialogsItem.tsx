import React from 'react';
import s from '../Dialogs.module.scss';
import {NavLink} from 'react-router-dom';

type DialogPropsType = {
    name: string,
    id: string,
    onDialogItemClick: ()=>void
}

const DialogsItem = (props: DialogPropsType) => {
    return <NavLink onClick={() => props.onDialogItemClick()} activeClassName={s.active}
                    to={`/social-network/dialogs/${props.id}`}>{props.name}</NavLink>
}

export default DialogsItem

