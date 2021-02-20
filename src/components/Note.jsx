import React from 'react'
import NoteDate from './NoteDate'

const Note = () => {
  return (
    <div>
      <NoteDate
        isoDate={new Date().toISOString()}
        localeDate={new Date().toLocaleString()}
      />
    </div>
  )
}

export default Note
