import React, { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'

import styles from '../styles/components/Input.module.css'

export function Input(props) {
  const { addNote, inputNote, setInputNote } = useContext(NoteContext)

  function handleChange({ target }) {
    setInputNote(target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    addNote(inputNote)
  }

  return (
    <form className={styles.inputContainer} onSubmit={handleSubmit}>
      <input type='text' value={inputNote} onChange={handleChange} required />
      {props.children}
    </form>
  )
}
