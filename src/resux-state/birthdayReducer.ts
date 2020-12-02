import { Dictionary, getMonth } from "./dataGenerator";
import { usersBirthdayActionsType } from "./birthdayActions";
import { IUser } from "./userReducer";

export type initialStateType = typeof initialState;
const initialState = {
  usersBirthday: {} as Dictionary<Array<IUser>>,
};

export const birthdayReducer = (
  state = initialState,
  action: usersBirthdayActionsType
): initialStateType => {
  switch (action.type) {
    case "usersBirthdayReducer/GET_MONTH":
      return {
        ...state,
        usersBirthday: { ...action.usersBirthday },
      };
    case "usersBirthdayReducer/SET_USER_BIRTHDAY": {
      const monthName = getMonth(action.user.dob);
      const newBirthdayState = { ...state.usersBirthday };
      newBirthdayState[monthName].push(action.user);
      return {
        ...state,
        usersBirthday: newBirthdayState,
      };
    }
    case "usersBirthdayReducer/REMOVE_USER_BIRTHDAY": {
      let newBirthdayState = { ...state.usersBirthday };
      const monthName2 = getMonth(action.user.dob);
      newBirthdayState[monthName2] = newBirthdayState[monthName2].filter(
        (u) => u.id !== action.user.id
      );
      return {
        ...state,
        usersBirthday: newBirthdayState,
      };
    }
  }
  return state;
};
