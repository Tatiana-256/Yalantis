import {createStore, Action, combineReducers, applyMiddleware} from "redux";
import {ThunkAction} from "redux-thunk";
import thunkMiddleware from "redux-thunk"
import {usersReducer} from "./userReducer";
import {birthdayReducer} from "./birthdayReducer";


let reducers = combineReducers({
    users: usersReducer,
    usersBirthday: birthdayReducer

})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;


// ______type of state___________

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

// ______type of actions___________

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>


// ______type of thunk-creator___________

export type baseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

