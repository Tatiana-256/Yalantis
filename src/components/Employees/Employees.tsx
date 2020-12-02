import React from "react";
import { IUser } from "../../resux-state/userReducer";
import { useDispatch } from "react-redux";
import { Employee } from "./Employee";
import styles from "./employee.module.css";
import { usersActions } from "../../resux-state/userActions";
import { usersBirthdayActions } from "../../resux-state/birthdayActions";

interface IProps {
  userBox: {
    boxName: string;
    users: Array<IUser>;
  };
}

export const Employees: React.FC<IProps> = ({ userBox }) => {
  const dispatch = useDispatch();

  const onChangeCheckBox = (user: IUser) => {
    if (user.isChecked) {
      dispatch(usersActions.changeIsChecked(userBox.boxName, user));
      dispatch(usersBirthdayActions.removeUserBirthday(user));
    } else {
      dispatch(usersActions.changeIsChecked(userBox.boxName, user));
      dispatch(usersBirthdayActions.setUserBirthday(user));
    }
  };
  return (
    <div className={styles.employees_container}>
      <div style={{ fontWeight: "bold", backgroundColor: "#ACE5FF" }}>
        {userBox.boxName}
      </div>
      {userBox.users.length === 0 ? (
        <div>-----</div>
      ) : (
        userBox.users.map((y) => (
          <Employee user={y} onChangeCheckBox={onChangeCheckBox} key={y.id} />
        ))
      )}
    </div>
  );
};
