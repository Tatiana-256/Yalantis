import React, {useEffect} from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import {Provider, useDispatch} from 'react-redux';
import store from './resux-state/store';
import {getUsers} from './resux-state/userActions';
import {Employees} from "./components/Employees/Employees";
import {EmployeesBirthday} from "./components/EmployeesBirthday/EmployeesBirthday";
import {getUsersBirthday} from "./resux-state/birthdayActions";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getUsersBirthday())


    }, [])

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
