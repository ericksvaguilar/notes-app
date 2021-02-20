import './App.css'
import Button from './components/Button'
import Note from './components/Note'

function App() {
  return (
    <div className='App'>
      <h1>React Note</h1>
      <Button buttonName='Add new note' />
      <Note />
    </div>
  )
}

export default App
