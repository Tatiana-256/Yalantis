import {baseThunkType, InferActionsTypes} from "./store";
import {IUser} from "./userReducer";
import {usersAPI} from "../requests/api";
import {dataGenerator, Dictionary} from "./dataGenerator";


export type usersActionsType = InferActionsTypes<typeof usersActions>

export const usersActions = {
    getUsers: (users: Dictionary<Array<IUser>>) => ({type: "usersReducer/GET_USERS", users} as const),
    changeIsChecked: (letterBox: string, user: IUser) => ({
        type: "usersReducer/CHANGE_USER_IS_CHECKED",
        letterBox,
        user
    } as const)
};


// //_________________ thunk-creators____________________
type thunkType = baseThunkType<usersActionsType>


export const getUsers = (): thunkType => async (dispatch) => {
    let result = await usersAPI.getUsers();
    if (result) {
        const dictionary = dataGenerator(result);
        dispatch(usersActions.getUsers(dictionary))
    }
};
