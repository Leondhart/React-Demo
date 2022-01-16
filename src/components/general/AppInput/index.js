import React from 'react'
import styles from './index.module.scss'

const AppInput = (props) => {
    return <input className={`${props.className} ${styles.input}`} value={props.value} onChange={props.onChange} />
}

export default AppInput