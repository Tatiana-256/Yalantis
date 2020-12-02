import React, {useEffect} from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store, {AppStateType} from './resux-state/store';
import {getUsers} from './resux-state/actions';
import {Employees} from "./components/Employees/Employees";
import {EmployeesBirthday} from "./components/EmployeesBirthday/EmployeesBirthday";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, [])


    const {users} = useSelector((store: AppStateType) => store)

    console.log(users)

    return (
        <div className="App">
            <Employees/>
            <EmployeesBirthday/>
        </div>
    );
}

export default App;


export function AppGlobal() {

    return (
        <HashRouter>
            <Provider store={store}>
                <div className='App_container'>
                        <App/>
                </div>
            </Provider>
        </HashRouter>
    );
}
