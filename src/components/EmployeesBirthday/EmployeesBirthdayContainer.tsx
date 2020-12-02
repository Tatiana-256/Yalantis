import React from 'react';
import styles from '../Employees/employee.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../resux-state/store";
import {EmployeesBirthday} from './EmployeesBirthday';


export const EmployeesBirthdayContainer = () => {

    const {usersBirthday} = useSelector((store: AppStateType) => store)


    return <div className={styles.employees_wrapper}>
        <div className={styles.head_style}>Employees Birthday</div>
        <div className={styles.basic_container} style={{display: "flex"}}>


            {Object.entries(usersBirthday.usersBirthday).map(x => {
                if (x[1].length > 0) {
                    return <EmployeesBirthday monthName={x[0]} users={x[1]}
                                              key={x[0]}/>
                }
            })}

        </div>
    </div>
}

