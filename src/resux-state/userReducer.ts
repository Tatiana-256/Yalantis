import {Dictionary} from "./dataGenerator";
import {usersActionsType} from "./userActions";
import {deleteElemInLC, pointedUsers, saveState} from "../requests/localStorage";

export type initialStateType = typeof initialState
const initialState = {
    users: {} as Dictionary<Array<IUser>>
};


export const usersReducer = (state = initialState, action: usersActionsType): initialStateType => {
    switch (action.type) {
        case "usersReducer/GET_USERS":
            return {
                ...state,
                users: {...action.users}
            };
        case "usersReducer/CHANGE_USER_IS_CHECKED":
            let newUserState = {...state.users}
            newUserState[action.letterBox].forEach(x => {
                if (x.id === action.user.id) {
                    x.isChecked = !x.isChecked
                    if (x.isChecked) {
                        saveState(pointedUsers, action.user)
                    } else {
                        deleteElemInLC(pointedUsers, action.user)
                    }

                }
            });
            return {
                ...state,
                users: newUserState
            }
    }
    return state

};


export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    dob: string,
    isChecked: boolean
}
