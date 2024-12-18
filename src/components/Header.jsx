import React, { useContext } from 'react'
import { DataContext } from '../context/UserContex'

const Header = () => {

    const username = useContext(DataContext)

  return (
    <div>
        <h1>Header {username.age}</h1>
    </div>
  )
}

export default Header