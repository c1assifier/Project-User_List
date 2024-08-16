import React from 'react'
import styles from '../ErrorModal.module.css'

export const ErrorModal = ({onCloseModal, title, message}) => {
  return (
    <div>
        <div className={styles.backdrop}></div>
    <form className = {styles.modal} >
        <header className = {styles.header}>
            <h2>{title}</h2>
        </header>
        <div className = {styles.content}>
            <p>{message}</p>
        </div>
        <footer className = {styles.actions}>
            <button onClick = {onCloseModal}>Close</button>
        </footer>
    </form>
    </div>
  )
}


