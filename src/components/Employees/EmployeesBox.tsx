import React, {ChangeEvent} from 'react';
import {IUser} from "../../resux-state/reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../resux-state/store";
import {Employee} from "./Employee";
import styles from './employee.module.css'
import {usersActions} from "../../resux-state/actions";


interface IProps {
    userBox: {
        boxName: string,
        users: Array<IUser>
    }

}

export const EmployeesBox: React.FC<IProps> = ({userBox}) => {

    const dispatch = useDispatch();

    const onChangeCheckBox = (userId: string) => {
        dispatch(usersActions.changeIsChecked(userBox.boxName, userId))
    }


    return <div className={styles.employees_container}>
        <div style={{fontWeight: "bold"}}>{userBox.boxName}</div>
        {userBox.boxName.length === 0 ? <div>-----</div> : userBox.users.map(y => <Employee user={y}
                                                                                            onChangeCheckBox={onChangeCheckBox}/>)}
    </div>

}
