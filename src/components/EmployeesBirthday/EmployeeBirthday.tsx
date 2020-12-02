import React from 'react';
import {getMonth} from '../../resux-state/dataGenerator';
import {IUser} from "../../resux-state/userReducer";


interface IProps {
    user: IUser
}

export const EmployeeBirthday: React.FC<IProps> = ({user}) => {

    const year = user.dob.slice(0, 4)
    const month = getMonth(user.dob)
    const date = user.dob.slice(8, 10)

    const dateOfBirth = `${date} ${month}, ${year} year`

    return <li style={{width: "80%", padding: "1% 0"}}>
        {user.lastName} {user.lastName} - {dateOfBirth}
    </li>
}
