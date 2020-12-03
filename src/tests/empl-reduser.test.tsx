import React from "react";
import {usersReducer} from "../resux-state/userReducer";


describe('employees reducer', () => {


    const initialState = {
        users: {
            "A": [{
                id: '123',
                firstName: 'Alex',
                lastName: 'Gray',
                dob: '2000-02-12',
                isChecked: false
            }]
        }
    };


    test('should return the initial state', () => {

            const users = {
                "A": [{
                    id: '123',
                    firstName: 'Alex',
                    lastName: 'Gray',
                    dob: '2000-02-12',
                    isChecked: false
                }]
            }
            const action = ({type: 'usersReducer/GET_USERS', users} as const);
            expect(usersReducer(undefined, action)).toEqual(initialState)
        }
    );

    test('Change user checked status', () => {
        const action = ({
            type: 'usersReducer/CHANGE_USER_IS_CHECKED', letterBox: 'A',
            user: {
                id: '123',
                firstName: 'Alex',
                lastName: 'Gray',
                dob: '2000-02-12',
                isChecked: false
            },
        } as const);


        const expectedState = {
            users: {
                "A": [{
                    id: '123',
                    firstName: 'Alex',
                    lastName: 'Gray',
                    dob: '2000-02-12',
                    isChecked: true
                }]
            }
        };
        expect(usersReducer(initialState, action)).toEqual(expectedState);
    })

});
