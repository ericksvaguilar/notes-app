import React, { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'

import styles from '../styles/components/Input.module.css'

export function Input(props) {
  const { inputNote, setInputNote } = useContext(NoteContext)

  function handleChange({ target }) {
    setInputNote(target.value)
  }

  return (
    <form className={styles.inputContainer}>
      <input type='text' value={inputNote} onChange={handleChange} required />
      {props.children}
    </form>
  )
}
