import { createContext, useState } from 'react'

export const NoteContext = createContext()

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState(['This is a note', 'This is another note'])
  const [inputNote, setInputNote] = useState('')

  function addNote(note) {
    setNotes(prev => [...prev, note])
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, inputNote, setInputNote }}>
      {children}
    </NoteContext.Provider>
  )
}
