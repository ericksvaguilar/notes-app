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

  function editNote(note) {
    const index = notes.indexOf(note)
    const tempArray = [...notes]
    tempArray[index] = note
    setNotes(tempArray)
  }

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        removeNote,
        inputNote,
        setInputNote,
        editNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}
