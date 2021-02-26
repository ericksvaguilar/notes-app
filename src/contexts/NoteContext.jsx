import { createContext, useState } from 'react'

export const NoteContext = createContext()

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState(['This is a note', 'This is another note'])

  function addNotes(note) {
    setNotes(prev => [...prev, note])
  }

  return (
    <NoteContext.Provider value={{ notes, addNotes }}>
      {children}
    </NoteContext.Provider>
  )
}
