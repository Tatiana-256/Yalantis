import React from "react";
import { IUser } from "../../resux-state/userReducer";
import styles from "./employee.module.css";

interface IProps {
  user: IUser;
  onChangeCheckBox: (user: IUser) => void;
}

export const Employee: React.FC<IProps> = ({ user, onChangeCheckBox }) => {
  const onChangeCheckBoxHandler = () => {
    onChangeCheckBox(user);
  };

  return (
    <div className={styles.employee_container}>
      <div>
        {user.lastName} {user.firstName}
      </div>
      <input
        onChange={onChangeCheckBoxHandler}
        type="checkbox"
        checked={user.isChecked}
      />
    </div>
  );
};
