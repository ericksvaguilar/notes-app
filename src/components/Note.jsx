import React, { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'

export function Note() {
  const { notes, removeNote } = useContext(NoteContext)

  function handleRemoveNote(value) {
    removeNote(value)
  }

  return (
    <div>
      {notes.map(note => (
        <>
          <li key={String(note)}>
            <input type='text' readOnly='true' value={note} />
            <button type='button' onClick={() => removeNote(note)}>
              Remove
            </button>
          </li>
        </>
      ))}
    </div>
  )
}
