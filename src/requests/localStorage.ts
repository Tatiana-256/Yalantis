import {IUser} from "../resux-state/userReducer";

export const pointedUsers = "pointedUsers";


export const restoreState = (key: string) => {
    let usersAsString = localStorage.getItem(key);
    if (usersAsString) {
        return JSON.parse(usersAsString)
    }

}

export const saveState = (key: string, user: IUser) => {
    let usersAsString = localStorage.getItem('pointedUsers');
    if (usersAsString) {
        const allUsers: Array<IUser> = JSON.parse(usersAsString);
        allUsers.push(user);
        localStorage.setItem(key, JSON.stringify(allUsers))
    } else {
        const allUsers: Array<IUser> = [user];
        localStorage.setItem(key, JSON.stringify(allUsers))

    }
};


export const deleteElemInLC = (key: string, user: IUser) => {
    let usersAsString = localStorage.getItem(pointedUsers);
    if (usersAsString) {
        const allUsers: Array<IUser> = JSON.parse(usersAsString);
        localStorage.setItem(key, JSON.stringify(allUsers.filter(x => x.id !== user.id)))
    }
};




