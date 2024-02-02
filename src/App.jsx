import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchData from './components/FetchData'
import ItemDetails from './components/ItemDetails'
import PaginatedList from './components/PaginatedList'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(null)

  return (
    <>
    <Header />
      <FetchData/>
      <ItemDetails/>
      <PaginatedList/>
    </>
  )
}

export default App
