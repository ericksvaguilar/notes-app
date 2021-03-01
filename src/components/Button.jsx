import React, { useContext } from 'react'
import { NoteContext } from '../contexts/NoteContext'
import styles from '../styles/components/Button.module.css'

export function Button() {
  return <input type='submit' value='new note' className={styles.button} />
}
