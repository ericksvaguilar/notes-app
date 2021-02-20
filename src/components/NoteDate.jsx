import React from 'react'

const NoteDate = props => {
  return (
    <div>
      <time dateTime={props.datetime}>{props.datetime}</time>
    </div>
  )
}

export default NoteDate
