import React from "react";
import styles from "./employeesBirthday.module.css";
import { EmployeeBirthday } from "./EmployeeBirthday";
import { IUser } from "../../resux-state/userReducer";

interface IProps {
  monthName: string;
  users: Array<IUser>;
}

export const EmployeesBirthday: React.FC<IProps> = ({ monthName, users }) => {
  return (
    <div className={styles.month_box}>
      <div style={{ fontWeight: "bold" }}>{monthName}</div>
      <div className={styles.birthday_box}>
        {users.map((y) => (
          <EmployeeBirthday user={y} key={y.id} />
        ))}
      </div>
    </div>
  );
};
