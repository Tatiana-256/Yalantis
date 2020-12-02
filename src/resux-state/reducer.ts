import {Dictionary} from "./dataGenerator";
import {usersActionsType} from "./actions";

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
            }
        case "usersReducer/CHANGE_USER_IS_CHECKED":
            let newUserState = {...state.users}
            newUserState[action.letterBox].forEach(x => {
                if (x.id === action.id) {
                    x.isChecked = !x.isChecked
                }
            })
            return {
                ...state,
                users: newUserState
            }
    }
    return state

}


export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    dob: string,
    isChecked: boolean
}
