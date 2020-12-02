import React, {ChangeEvent, useState} from 'react';
import {IUser} from "../../resux-state/reducer";
import styles from './employee.module.css'
import {useDispatch} from "react-redux";
import {usersActions} from "../../resux-state/actions";


interface IProps {
    user: IUser,
    onChangeCheckBox: (userId: string) => void
}

export const Employee: React.FC<IProps> = ({user, onChangeCheckBox}) => {

    const onChangeCheckBoxHandler = () => {
        onChangeCheckBox(user.id)
    }

    return <div className={styles.employee_container}>
        <div>{user.lastName} {user.firstName}</div>
        <input onChange={onChangeCheckBoxHandler}
               type="checkbox" checked={user.isChecked}/>
    </div>

};
