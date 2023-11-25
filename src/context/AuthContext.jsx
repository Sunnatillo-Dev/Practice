import { createContext, useEffect, useState } from 'react'
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
 
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider