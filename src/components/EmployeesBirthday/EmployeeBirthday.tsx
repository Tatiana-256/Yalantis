import React from 'react';
import {IUser} from "../../resux-state/userReducer";


interface IProps {
    user: IUser
}

export const EmployeeBirthday: React.FC<IProps> = ({user}) => {
    const date = Date.parse(user.dob)
    return <div>{user.lastName} {user.lastName} {user.dob} {date}</div>
}
