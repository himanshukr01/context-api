import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContex = ({children}) => {

  const userData = {
    username: 'Himanshu',
    age: 69,
    city: 'Patna'
  }
    
  return (
    <div>
      <DataContext.Provider value={userData}>
       {children}
      </DataContext.Provider>
    </div>
  )
}

export default UserContex