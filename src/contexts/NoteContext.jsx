import { createContext, useState } from 'react'

export const NoteContext = createContext()

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState([])
  const [inputNote, setInputNote] = useState('')

  function addNote(note) {
    setNotes(prev => [note, ...prev])
  }

  function removeNote(id) {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <NoteContext.Provider
      value={{ notes, addNote, removeNote, inputNote, setInputNote }}
    >
      {children}
    </NoteContext.Provider>
  )
}
