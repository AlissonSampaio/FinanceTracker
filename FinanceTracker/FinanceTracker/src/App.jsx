import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'/>
      <Route path='/transactions'/>
      <Route path='/transactions/new'/>
      <Route path='/transactions/:id'/>
      <Route path='*'/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
