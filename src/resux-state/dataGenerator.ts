import {IUser} from "./reducer";


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

export interface Dictionary<T> {
    [Key: string]: T;
}
