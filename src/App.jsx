import React, { useContext } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import { DataContext } from './context/UserContex'

const App = () => {

  const data = useContext(DataContext)

  console.log(data)

  return (
    <div>
      <h1>This is App.jsx {data}</h1>
      <Header />
      <Footer />
      <Section />
    </div>
  )
}

export default App