import { createContext, useState } from 'react'

export const NoteContext = createContext()

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState([])
  const [inputNote, setInputNote] = useState('')

  function addNote(note) {
    setNotes(prev => [...prev, note])
  }

  // TODO: This method should use an ID to delete the note, so equal notes can be deleted individually
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
