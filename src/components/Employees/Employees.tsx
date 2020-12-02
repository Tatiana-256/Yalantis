import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../resux-state/store";
import styles from './employee.module.css'
import {EmployeesBox} from "./EmployeesBox";


export const Employees = () => {

    const {users} = useSelector((store: AppStateType) => store)

    return <div className={styles.employees_wrapper}>
        <div>Employees</div>
        <div className={styles.basic_container} style={{display: "flex"}}>
            {Object.entries(users.users).map(x => <EmployeesBox userBox={{boxName: x[0], users: x[1]}}/>)}

        </div>
    </div>
}
