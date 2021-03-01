import React, { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'

export function Input() {
  const { inputNote, setInputNote } = useContext(NoteContext)

  function handleChange({ target }) {
    setInputNote(target.value)
  }

  return (
    <div>
      <input type='text' value={inputNote} onChange={handleChange} />
    </div>
  )
}
