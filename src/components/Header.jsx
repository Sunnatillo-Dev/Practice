import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { BasketContext } from '../context/BasketContext'

const Header = () => {
  const { state, setState } = useContext(ProductContext)
  const { state: basket } = useContext(BasketContext)

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={'20px 150px'}
      bg={'black'}
      color={'white'}
    >
      <Heading size={'md'}>test</Heading>
      <Flex as='nav' gap={'20px'}>
        <Link to={'/'}>home</Link>
        <Link to={'/about'}>about</Link>
        <Link to={'/contact'}>contact</Link>
      </Flex>
      <Flex gap={'20px'}>
        <Button colorScheme='facebook'>
          Products:
          <Text fontSize={'xl'} color={'gold'} as={'b'}>
            {state.length}
          </Text>
        </Button>
        <Link to='/basket'>
          <Button colorScheme='telegram'>
            basket{' '}
            <Text as={'b'} color={'gold'} ml={'10px'} fontSize={'lg'}>
              {basket?.length}
            </Text>
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}

export default Header
