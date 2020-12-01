import axios from "axios";
import {IUser} from "../resux-state/reducer";

const dev = 'https://yalantis-react-school-api.yalantis.com/api/task0/users'

export const instance = axios.create({
    baseURL: dev,
    headers: {
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
    }
})


export const usersAPI = {
    getUsers() {
        return instance.get<Array<IUser>>('')
            .then(res => {
                    debugger
                    console.log(res.data)
                    return res.data
                }
            )
    }
}
