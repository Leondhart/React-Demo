import React from 'react'
import styles from './index.module.scss'
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa'

const TodoItem = (props) => {
    return <div className={`${styles.todoItem}`}>
        <div className={styles.content}>
            <div className={styles.title}>{props.index} {props.item.name}</div>
        </div>
        <div className={styles.action}>
            <button className={styles.edit} onClick={() => { props.editAction(props.index) }}><FaEdit /></button>
            <button className={styles.delete}
                onClick={() => { props.deleteItem(props.index) }}
            ><FaTrash /></button>
            <button
                className={props.item.check ? styles.done : styles.notDone}
                onClick={() => { props.toggleCheck(props.index) }}
            ><FaCheck /></button>
        </div>
    </div>
}

export default TodoItem