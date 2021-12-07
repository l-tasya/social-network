import React from 'react';
import {Mail, MoreHorizontal} from 'react-feather';
import s from './UserInfo.module.scss'

const UserInfo: React.FC = (props) => {
    return (
        <div className={s.userInfo}>
            <div className={s.userInfo__img}>
                <div>
                    background image
                </div>
            </div>
            <div className={s.userInfo__info}>
                <img className={s.userInfo__ava} src={'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'} alt=''/>
                <div>
                    <div className={s.userInfo__title}>Name Surname</div>
                    <div className={s.userInfo__subtitle}>dalionfull@gmail.com</div>
                </div>
                <div className={`${s.userInfo__buttons} ${s.buttons}`}>
                    <button className={s.buttons__friendAdd}>ADD FRIEND</button>
                    <button className={s.buttons__chat}><Mail size={20}/></button>
                    <button className={s.buttons__other}><MoreHorizontal size={20}/></button>
                </div>
            </div>
        </div>
    )
}
export default UserInfo;