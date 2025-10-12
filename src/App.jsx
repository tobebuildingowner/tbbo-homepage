import { useState } from 'react'
import Header from './components/Header'
import './styles/styles.scss'
import Title from './components/Title'
import Company from './pages/Company'
import WhatWedo from './pages/WhatWeDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Title />
    <Company/>
    <WhatWedo/>
    </>
  )
}

export default App
