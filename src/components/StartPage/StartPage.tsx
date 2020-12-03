import React from "react";
import {useHistory} from "react-router-dom";
import {inspect} from "util";
import styles from './StartPage.module.css'


export const StartPage = () => {

    const history = useHistory()

    return <div className={styles.start_page_container}>
        <div className={styles.start_page_press}
             onClick={() => history.push('employees')}>
            Go to employees page
        </div>
    </div>

}

