import { Routes, Route } from 'react-router-dom'
import Deductor from './components/container/Deductor'
import Cursor from './components/cursor/curosr'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path='/home' element={<Deductor />} />
      </Routes>
    </>
  )
}

export default App
