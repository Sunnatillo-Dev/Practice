import { Box, Button, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const loginRef = useRef('')
  const pwRef = useRef('')

  const auth = async () => {
    try {
      const res = await axios.post('http://localhost:5000/auth/register', {
        username: loginRef.current.value,
        password: pwRef.current.value,
      })
      if (res.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      setError(error.response.data.message)
    }
  }

  const onRegister = () => {
    auth()
  }

  return (
    <Box
      width={'100%'}
      height={'100vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box width={'300px'}>
        <Input placeholder='email' ref={loginRef} />
        <Input placeholder='password' my={'10px'} ref={pwRef} />
        <Button colorScheme='facebook' width={'100%'} onClick={onRegister}>
          register
        </Button>
        <Text color={'red'}>{error}</Text>
      </Box>
    </Box>
  )
}

export default Register
