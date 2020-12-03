import {IUser} from "./userReducer";
import {pointedUsers, restoreState} from "../requests/localStorage";

export interface Dictionary<T> {
    [Key: string]: T;
}

export const dataGenerator = (result: Array<IUser>) => {
    const dictionary: Dictionary<Array<IUser>> = {};
    for (let i = 65; i < 91; i++) {
        dictionary[String.fromCharCode(i)] = [];
    }
    const storageUsers: Array<IUser> = restoreState(pointedUsers);
    result.forEach((x) => {
        if (storageUsers) {
            x.isChecked = storageUsers.some((y) => y.id === x.id);
        } else {
            x.isChecked = false;
        }
        dictionary[x.lastName[0]].push(x);
    });
    return dictionary;
};


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const dataMonthsGenerator = () => {
    const monthsDictionary: Dictionary<Array<IUser>> = {};
    months.forEach((m) => (monthsDictionary[m] = []));
    const storageUsers: Array<IUser> = restoreState(pointedUsers);
    storageUsers.forEach((x) => monthsDictionary[getMonth(x.dob)].push(x));
    return monthsDictionary;
};

export const getMonth = (userBirthday: string) => {
    let d = new Date(userBirthday);
    return  months[d.getMonth()];
};

