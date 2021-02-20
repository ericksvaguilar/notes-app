import React from 'react'

const NoteDate = props => {
  return (
    <div>
      <time dateTime={props.isoDate}>{props.localeDate}</time>
    </div>
  )
}

export default NoteDate
