import React, { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'

import styles from '../styles/components/Note.module.css'

export function Note() {
  const { notes, removeNote } = useContext(NoteContext)

  return (
    <>
      {notes.length > 0 ? (
        <ul className={styles.noteContainer}>
          {notes.map((note, idx) => (
            <>
              <li key={idx}>
                <input type='text' readOnly='true' value={note} />
                <button type='button' onClick={() => removeNote(idx)}>
                  X
                </button>
              </li>
            </>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </>
  )
}
