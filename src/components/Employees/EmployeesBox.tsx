import React, {ChangeEvent} from 'react';
import {IUser} from "../../resux-state/userReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../resux-state/store";
import {Employee} from "./Employee";
import styles from './employee.module.css'
import {usersActions} from "../../resux-state/userActions";
import {usersBirthdayActions} from "../../resux-state/birthdayActions";


interface IProps {
    userBox: {
        boxName: string,
        users: Array<IUser>
    }

}

export const EmployeesBox: React.FC<IProps> = ({userBox}) => {

    const dispatch = useDispatch();

    const onChangeCheckBox = (user: IUser) => {
        debugger
        if (user.isChecked) {
            debugger
            dispatch(usersActions.changeIsChecked(userBox.boxName, user.id))
            dispatch(usersBirthdayActions.removeUserBirthday(user))
        } else {
            dispatch(usersActions.changeIsChecked(userBox.boxName, user.id))
            dispatch(usersBirthdayActions.setUserBirthday(user))
        }
    }


    return <div className={styles.employees_container}>
        <div style={{fontWeight: "bold"}}>{userBox.boxName}</div>
        {userBox.boxName.length === 0 ? <div>-----</div> : userBox.users.map(y => <Employee user={y}
                                                                                            onChangeCheckBox={onChangeCheckBox}/>)}
    </div>

}
