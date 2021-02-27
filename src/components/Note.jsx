import React, { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'

export function Note() {
  const { notes } = useContext(NoteContext)

  return (
    <div>
      {notes.map(note => (
        <li key={String(note)}>{note}</li>
      ))}
    </div>
  )
}
