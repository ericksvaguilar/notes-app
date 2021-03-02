import React, { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'

export function Note() {
  const { notes, removeNote } = useContext(NoteContext)

  return (
    <div>
      {notes.map((note, idx) => (
        <>
          <li key={note}>
            <input type='text' readOnly='true' value={note} />
            <button type='button' onClick={() => removeNote(idx)}>
              Remove
            </button>
          </li>
        </>
      ))}
    </div>
  )
}
