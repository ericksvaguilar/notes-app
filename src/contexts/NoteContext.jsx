import { createContext, useState } from 'react'

export const NoteContext = createContext()

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState([])
  const [inputNote, setInputNote] = useState('')

  function addNote(note) {
    setNotes(prev => [...prev, note])
  }

  function removeNote(value) {
    setNotes(notes.filter(currNote => currNote !== value))
  }

  return (
    <NoteContext.Provider
      value={{ notes, addNote, removeNote, inputNote, setInputNote }}
    >
      {children}
    </NoteContext.Provider>
  )
}
