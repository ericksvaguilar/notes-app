import React, { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'
import styles from '../styles/components/Button.module.css'

export function Button() {
  const { addNote, inputNote } = useContext(NoteContext)

  function handleSubmit() {
    addNote(inputNote)
  }

  return (
    <button className={styles.button} onSubmit={handleSubmit}>
      New Note
    </button>
  )
}
