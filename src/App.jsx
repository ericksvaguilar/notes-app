import './styles/global.css'
import styles from './styles/App.module.css'

import { Button } from './components/Button'
import { Note } from './components/Note'

function App() {
  return (
    <div className={styles.app}>
      <h1>React Note</h1>
      <Button />
      <Note />
    </div>
  )
}

export default App
