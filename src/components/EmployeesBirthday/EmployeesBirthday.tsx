import React from 'react';
import styles from '../Employees/employee.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../resux-state/store";
import {EmployeeBirthday} from "./EmployeeBirthday";


export const EmployeesBirthday = () => {

    const {usersBirthday} = useSelector((store: AppStateType) => store)

    console.log(usersBirthday)


    return <div className={styles.employees_wrapper}>
        <div>Employees Birthday</div>
        <div className={styles.basic_container} style={{display: "flex", backgroundColor: "azure"}}>
            {Object.entries(usersBirthday.usersBirthday).map(x => <div style={{padding: '4%'}}>{x[0]}
                <div>{x[1].map(y => <EmployeeBirthday user={y}/>)}</div>
            </div>)}

        </div>
    </div>
}

//{}
