import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext(null)

const ProductProvider = ({ children }) => {
  const [state, setState] = useState([])
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((result) => setState(result.data.products))
  }, [])

  return (
    <ProductContext.Provider value={{state,setState}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
