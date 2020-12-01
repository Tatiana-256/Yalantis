import {baseThunkType, InferActionsTypes} from "./store";
import {IUser} from "./reducer";
import {usersAPI} from "../requests/api";


export type usersActionsType = InferActionsTypes<typeof usersActions>
//
export const usersActions = {
    getUsers: (users: Array<IUser>) => ({type: "usersReducer/GET_USERS", users} as const)
};


// //_________________ thunk-creators____________________
type thunkType = baseThunkType<usersActionsType>


export const getUsers = (): thunkType => async (dispatch) => {
    let result = await usersAPI.getUsers()
    debugger
    if (result) {
        dispatch(usersActions.getUsers(result))
    }
};
