import React, { createContext, useState } from 'react'

export const PassContext = createContext()

const PassContextProvider = ({children}) => {
    const [pass, setPass] = useState('')
    
  return (
    <PassContext.Provider value={{pass, setPass}}>
    {children}
    </PassContext.Provider>
  )
}

export default PassContextProvider