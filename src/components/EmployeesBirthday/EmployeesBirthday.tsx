import React from 'react';
import styles from './employeesBirthday.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../resux-state/store";
import {EmployeeBirthday} from "./EmployeeBirthday";
import {IUser} from "../../resux-state/userReducer";

interface IProps {
    monthName: string
    users: Array<IUser>
}

export const EmployeesBirthday: React.FC<IProps> = ({monthName, users}) => {

    const {usersBirthday} = useSelector((store: AppStateType) => store)

    console.log(usersBirthday)


    return <div className={styles.month_box}>
        <div style={{fontWeight: "bold"}}>{monthName}</div>
        <div className={styles.birthday_box}>
            {users.map(y => <EmployeeBirthday user={y} key={y.id}/>)}
        </div>
    </div>


}

//{
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//     text-align: start;}
