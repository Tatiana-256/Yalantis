import {baseThunkType, InferActionsTypes} from "./store";
import {IUser} from "./reducer";
import {usersAPI} from "../requests/api";
import {dataGenerator, Dictionary} from "./dataGenerator";


export type usersActionsType = InferActionsTypes<typeof usersActions>

export const usersActions = {
    getUsers: (users: Dictionary<Array<IUser>>) => ({type: "usersReducer/GET_USERS", users} as const),
    changeIsChecked: (letterBox: string, id: string) => ({
        type: "usersReducer/CHANGE_USER_IS_CHECKED",
        letterBox,
        id
    } as const)
};


// //_________________ thunk-creators____________________
type thunkType = baseThunkType<usersActionsType>


export const getUsers = (): thunkType => async (dispatch) => {
    let result = await usersAPI.getUsers()
    if (result) {
        const dictionary = dataGenerator(result)
        // const dictionary: Dictionary<Array<IUser>> = {};
        //
        // for (let i = 65; i < 91; i++) {
        //     dictionary[String.fromCharCode(i)] = [];
        // }
        //
        // result.forEach(x => {
        //     x.isChecked = false;
        //     dictionary[x.lastName[0]].push(x);
        // });
        //
        // console.log(dictionary)
        // debugger
        dispatch(usersActions.getUsers(dictionary))
    }
};
