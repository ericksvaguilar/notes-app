import React, { useEffect, useState } from 'react'

import styles from '../styles/components/Note.module.css'

export function Note() {
  const [createdAt, setCreatedAt] = useState('')

  // Set date when the component is created
  useEffect(() => {
    setCreatedAt(new Date().toLocaleString('pt-br'))
  }, [])

  return (
    <div className={styles.noteContainer}>
      <h2>Note Title</h2>
      <p>{createdAt}</p>
    </div>
  )
}
