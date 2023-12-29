import { Routes, Route } from 'react-router-dom'
import Deductor from './components/container/Deductor'
import Cursor from './components/cursor/curosr'
import Navbar from './components/navbar/Navbar'
import Company from './components/company/Company'

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path='/home' element={<Deductor />} />
        <Route path='/company' element={<Company />} />
      </Routes>
    </>
  )
}

export default App
