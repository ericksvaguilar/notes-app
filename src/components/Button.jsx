import React, { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'
import styles from '../styles/components/Button.module.css'

export function Button() {
  const { addNote, inputNote } = useContext(NoteContext)

  function handleClick() {
    addNote(inputNote)
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      New Note
    </button>
  )
}
