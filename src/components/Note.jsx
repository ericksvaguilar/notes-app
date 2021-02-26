import React, { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'

export function Note() {
  const { notes } = useContext(NoteContext)
  console.log(notes[1])
  return <div>{notes[0]}</div>
}
