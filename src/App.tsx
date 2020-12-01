import React, {useEffect} from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import {Provider, useDispatch} from 'react-redux';
import store from './resux-state/store';
import {getUsers} from './resux-state/actions';


function App() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div className="App">

        </div>
    );
}

export default App;


export function AppGlobal() {

    return (
        <HashRouter>
            <Provider store={store}>
                <div className='App_container'>
                    <div className="App">
                        <App/>
                    </div>
                </div>
            </Provider>
        </HashRouter>
    );
}
