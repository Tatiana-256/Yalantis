import { baseThunkType, InferActionsTypes } from "./store";
import { IUser } from "./userReducer";
import { dataMonthsGenerator, Dictionary } from "./dataGenerator";

export type usersBirthdayActionsType = InferActionsTypes<
  typeof usersBirthdayActions
>;

export const usersBirthdayActions = {
  getUsersBirthday: (usersBirthday: Dictionary<Array<IUser>>) =>
    ({
      type: "usersBirthdayReducer/GET_MONTH",
      usersBirthday,
    } as const),
  setUserBirthday: (user: IUser) =>
    ({
      type: "usersBirthdayReducer/SET_USER_BIRTHDAY",
      user,
    } as const),
  removeUserBirthday: (user: IUser) =>
    ({
      type: "usersBirthdayReducer/REMOVE_USER_BIRTHDAY",
      user,
    } as const),
};

// //_________________ thunk-creators____________________
type thunkType = baseThunkType<usersBirthdayActionsType>;

export const getUsersBirthday = (): thunkType => async (dispatch) => {
  const dictionary = dataMonthsGenerator();
  dispatch(usersBirthdayActions.getUsersBirthday(dictionary));
};
