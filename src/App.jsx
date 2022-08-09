import React, { useState, useEffect } from 'react'
import DataMenu from './db/menu.json'
import Navbar from './components/Navbar'

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(DataMenu.menu)
  })

  return (
    <>
      <Navbar data={data} />
    </>
  )
}
