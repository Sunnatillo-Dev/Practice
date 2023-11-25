import { Box, Button, Input, Text } from "@chakra-ui/react"
import axios from "axios"
import { useContext, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
const LoginPage = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const [error, setError] = useState("")
  const navigate = useNavigate("")
  const loginEmailRef = useRef("")
  const loginPwRef = useRef("")

  const login = async () => {
    try {
      const result = await axios.post("http://localhost:5000/auth/login", {
        username: loginEmailRef.current.value,
        password: loginPwRef.current.value,
      })
      if (result.status === 200) {
        const token = JSON.stringify(result.data.token)
        localStorage.setItem("token", token)
        setIsAuth(true)
        navigate("/")
      }
    } catch (error) {
      setError(error)
    }
  }

  const onLogin = () => {
    login()
  }

  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box width={"300px"}>
        <Input placeholder="email" ref={loginEmailRef} />
        <Input placeholder="password" my={"10px"} ref={loginPwRef} />
        <Button colorScheme="facebook" width={"100%"} onClick={onLogin}>
          login
        </Button>
        <Link to={"/register"} style={{ color: "blue" }}>
          or register
        </Link>
        <Text color={"red"}>{error}</Text>
      </Box>
    </Box>
  )
}

export default LoginPage
