import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../resux-state/store";
import styles from './employee.module.css'
import {Employees} from "./Employees";


export const EmployeesContainer = () => {

    const {users} = useSelector((store: AppStateType) => store)

    return <div className={styles.employees_wrapper}>
        <div className={styles.head_style}>Employees</div>
        <div className={styles.basic_container} style={{display: "flex"}}>
            {Object.entries(users.users).map(x => <Employees userBox={{boxName: x[0], users: x[1]}} key={x[0]}/>)}

        </div>
    </div>
}
