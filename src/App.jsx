import './styles/global.css'
import styles from './styles/App.module.css'

import { Button } from './components/Button'
import { Note } from './components/Note'

import { NoteProvider } from './contexts/NoteContext'

function App() {
  return (
    <NoteProvider>
      <div className={styles.app}>
        <h1>React Note</h1>
        <Button />
        <Note />
      </div>
    </NoteProvider>
  )
}

export default App
