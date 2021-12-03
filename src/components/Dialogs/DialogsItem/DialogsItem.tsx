import React from "react";
import s from '../Dialogs.module.scss';
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string,
    id: string,
}

const DialogsItem = (props: DialogPropsType) => {
    return <NavLink activeClassName={s.active} to={`/social-network/dialogs/${props.id}`}>{props.name}</NavLink>
}

export default DialogsItem

