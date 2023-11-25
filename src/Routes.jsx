import { Route, Routes, useNavigate, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Register from "./pages/Register"
import Layout from "./Layout"
import { useContext, useEffect } from "react"
import { AuthContext } from "./context/AuthContext"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Button } from "@chakra-ui/react"
import Search from "./pages/Search"
const Routers = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"))
    if (token?.length) {
      setIsAuth(true)
      navigate(location.pathname)
    } else {
      setIsAuth(false)
      navigate("/login")
    }
  }, [])

  return (
    <Routes>
      {isAuth ? (
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
      <Route
        path="*"
        element={
          <div>
            404 page not found
            <Button onClick={() => navigate("/")}>go back</Button>
          </div>
        }
      />
    </Routes>
  )
}
export default Routers
