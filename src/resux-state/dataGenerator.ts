import {IUser} from "./userReducer";


export const dataGenerator = (result: Array<IUser>) => {

    const dictionary: Dictionary<Array<IUser>> = {};

    for (let i = 65; i < 91; i++) {
        dictionary[String.fromCharCode(i)] = [];
    }
    result.forEach(x => {
        x.isChecked = false;
        dictionary[x.lastName[0]].push(x);
    });

    return dictionary
}


export const dataMonthsGenerator = () => {
    const monthsDictionary: Dictionary<Array<IUser>> = {};


    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]

    months.forEach(m => monthsDictionary[m] = [])
    console.log(monthsDictionary)
    return monthsDictionary

}


export const getMonth = (userBirthday: string) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date(userBirthday);
    let monthName = months[d.getMonth()];
    return monthName
}

export interface Dictionary<T> {
    [Key: string]: T;
}
