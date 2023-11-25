import React, { createContext, useState } from "react"

export let CardProvider = createContext(null)
const CardContext = ({children}) => {
  let [state, setState] = useState({})
  return (
    <CardProvider.Provider value={{ state, setState }}>
      {children}
    </CardProvider.Provider>
  )
}

export default CardContext
