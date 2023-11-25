import { Box, Button, Container, Flex } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import Filter from './components/Filter'

const Layout = () => {
  const navigate = useNavigate()
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
    setIsAuth(false)
  }

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'center'}
        py={'20px'}
        bg={'black'}
        color={'white'}
      >
        <Flex gap={'30px'}>
          <Link to={'/'}>home</Link>
          <Link to={'/about'}>about</Link>
          <Link to={'/contact'}>contact</Link>
          {isAuth ? (
            <Button colorScheme='facebook' onClick={logout}>
              logout
            </Button>
          ) : (
            <Link to={'/login'}>login</Link>
          )}
        </Flex>
      </Box>
      <Container maxW={'container.xl'}>
        <Filter />
        <Outlet />
      </Container>
    </>
  )
}

export default Layout
