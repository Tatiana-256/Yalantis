import React from "react";
import {IUser, usersReducer} from "../resux-state/userReducer";
import {birthdayReducer} from "../resux-state/birthdayReducer";
import {Dictionary} from "../resux-state/dataGenerator";


describe('birthday reducer', () => {

    const initialState = {
        usersBirthday: {"February": []} as Dictionary<Array<IUser>>
    }

    const user = {
        id: '123',
        firstName: 'Alex',
        lastName: 'Gray',
        dob: '2019-02-26T16:52:36.244Z',
        isChecked: true
    }

    const newState = {
        usersBirthday: {
            "February": [{
                id: '123',
                firstName: 'Alex',
                lastName: 'Gray',
                dob: '2019-02-26T16:52:36.244Z',
                isChecked: true
            }]
        }
    }
    test('show checked employee in birthday part', () => {
            const action = ({type: "usersBirthdayReducer/SET_USER_BIRTHDAY", user,} as const);
            expect(birthdayReducer(initialState, action)).toEqual(newState)
        }
    );

    test('delete checked employee in birthday part', () => {
            const action = ({type: "usersBirthdayReducer/REMOVE_USER_BIRTHDAY", user} as const);
            expect(birthdayReducer(newState, action)).toEqual({
                usersBirthday: {"February": []}
            })
        }
    );
});
