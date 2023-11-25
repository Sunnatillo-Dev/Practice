import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import Routers from "./Routes.jsx"
import ProductProvider from "./context/ProductContext.jsx"
import BasketProvider from "./context/BasketContext.jsx"
import AuthProvider from "./context/AuthContext.jsx"
import CardContext from "./context/cardContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CardContext>
      <ChakraProvider>
        <AuthProvider>
          <BasketProvider>
            <ProductProvider>
              <Routers />
            </ProductProvider>
          </BasketProvider>
        </AuthProvider>
      </ChakraProvider>
    </CardContext>
  </BrowserRouter>
)
