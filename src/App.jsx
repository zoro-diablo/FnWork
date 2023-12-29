import { Routes, Route } from 'react-router-dom'
import Deductor from './components/container/Deductor'
import Navbar from './components/navbar/Navbar'
import Company from './components/company/Company'
import  Mouse  from './components/cursor/Mouse'

function App() {
  return (
    <>
     <Mouse />
      <Navbar />
      <Routes>
        <Route path='/' element={<Deductor />} />
        <Route path='/company' element={<Company />} />
      </Routes>
    </>
  )
}

export default App
