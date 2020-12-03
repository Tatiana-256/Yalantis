import React, {useEffect} from "react";
import "./App.css";
import {HashRouter, Redirect, Route} from "react-router-dom";
import {Provider, useDispatch} from "react-redux";
import store from "./resux-state/store";
import {getUsers} from "./resux-state/userActions";
import {EmployeesContainer} from "./components/Employees/EmployeesContainer";
import {getUsersBirthday} from "./resux-state/birthdayActions";
import {EmployeesBirthdayContainer} from "./components/EmployeesBirthday/EmployeesBirthdayContainer";
import {StartPage} from "./components/StartPage/StartPage";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
        dispatch(getUsersBirthday());
    }, []);

    return (
        <div className="App">
            <EmployeesContainer/>
            <EmployeesBirthdayContainer/>
        </div>
    );
}

export function AppGlobal() {
    return (
        <HashRouter>
            <Provider store={store}>
                <div className="App_container">
                    <Redirect from='/' to='/employees'/>
                    <Route exact path="/employees" component={App}/>
                    <Route exact path="/" component={StartPage}/>
                </div>
            </Provider>
        </HashRouter>
    );
}
