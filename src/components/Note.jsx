import React from 'react'
import NoteDate from './NoteDate'

const Note = () => {
  return (
    <div>
      <NoteDate datetime={new Date().toLocaleString()} />
    </div>
  )
}

export default Note
