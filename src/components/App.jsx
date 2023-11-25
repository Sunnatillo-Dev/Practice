import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { PostService } from '../service/PostService'

const App = () => {
  const [data, setData] = useState([])
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [changedPost, setChangedPost] = useState({})

  useEffect(() => {
    PostService.getAllData().then((result) => setData(result))
  }, [data])

  // delete

  // delete post
  const deletePost = (id) => {
    const newData = data.filter((post) => post._id !== id)
    setData(newData)
    PostService.onDelete(id)
  }

  const addPost = () => {
    const isExist = data.some((post) => post._id === changedPost._id)
    if (!isExist) {
      PostService.createPost({
        author,
        title,
        content,
      }).then((resutl) => setData([...data, resutl]))
    } else {
      PostService.putPost({
        _id: changedPost._id,
        author,
        title,
        content,
      })
    }

    setAuthor('')
    setTitle('')
    setContent('')
  }

  const editPost = (post) => {
    // console.log(post)
    setAuthor(post.author)
    setTitle(post.title)
    setContent(post.content)
    setChangedPost(post)
  }
  return (
    <Container maxW={'container.xl'}>
      <Heading>Posts List</Heading>
      <Box>
        <Input
          placeholder='author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Input
          placeholder='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          value={content}
          placeholder='content'
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme='facebook' onClick={addPost}>
          add
        </Button>
      </Box>
      <Box>
        {data.map((post) => (
          <Box
            key={post._id}
            width={'100%'}
            border={'1px solid black'}
            padding={'20px'}
          >
            <Flex
              width={'100%'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Heading size={'md'}>title:{post.title}</Heading>
              <Text as={'b'}>author:{post.author}</Text>
            </Flex>
            <br />
            <Text>
              <mark>content:</mark>
              {post.content}
            </Text>
            <Button colorScheme='red' onClick={() => deletePost(post._id)}>
              delete
            </Button>
            <Button colorScheme='facebook' onClick={() => editPost(post)}>
              edit
            </Button>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default App
