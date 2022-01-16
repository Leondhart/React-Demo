import styles from './index.module.scss'
import React from 'react';

const AppButton = (props) => {
    return <button className={`${styles.btn} ${styles.green}`} onClick={props.onClick}>{props.name}</button>
}

export default AppButton;