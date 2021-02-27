import React, { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'
import styles from '../styles/components/Button.module.css'

export function Button() {
  const { addNote } = useContext(NoteContext)

  function handleClick() {
    addNote('Olá')
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      New Note
    </button>
  )
}
