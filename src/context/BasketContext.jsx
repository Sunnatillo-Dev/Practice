import { createContext, useEffect, useState } from 'react'

export const BasketContext = createContext(null)

const BasketProvider = ({ children }) => {
  const storage = localStorage.getItem('basket-products')

  const [state, setState] = useState(JSON.parse(storage) || [])

  const addToLocaleStorage = (product) => {
    const data = state.some((item) => item?.id === product?.id)
    if (!data) {
      setState([...state, product])
    }
  }
  useEffect(() => {
    localStorage.setItem('basket-products', JSON.stringify(state))
  }, [state])
  return (
    <BasketContext.Provider value={{ addToLocaleStorage, state, setState }}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider
