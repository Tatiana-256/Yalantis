// import {ingredientsActionsType} from "./Ingredients-actions";
// import {IIngredient} from "../../Fin-Requests/Ingredients-API";

import {usersActionsType} from "./actions";

export type initialStateType = typeof initialState
const initialState = {
    users: [] as Array<IUser>
};


export const usersReducer = (state = initialState, action: usersActionsType): initialStateType => {
    switch (action.type) {
        case "usersReducer/GET_USERS":
            return {
                ...state,
                users: action.users
            }
    }
    return state

}


export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    dob: string
}
