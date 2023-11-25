import {
  Box,
  Heading,
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
  Input,
  Card,
} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { CardProvider } from "../context/cardContext"

const About = () => {
  const [data, setData] = useState([])
  const [input, setInput] = useState("")
  let { state, setState } = useContext(CardProvider)
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => setData(result.data.products))
  }, [])

  return (
    <Box>
      <Heading>product list</Heading>
      <Flex my={"30px"}>
        {/* <Input
          placeholder={'search'}
          onChange={(e) => setInput(e.target.value)}
        /> */}
      </Flex>
      <Grid templateColumns={"repeat(4,1fr)"} gap={"20px"}>
        {data
          .filter(
            (item) =>
              item.title.toLowerCase().includes(input.toLowerCase()) ||
              item.brand.toLowerCase().includes(input.toLowerCase()) ||
              item.price === parseInt(input)
          )
          .map((item) => (
            <GridItem key={item.id} border={"1px solid gray"} padding={"10px"}>
              <Image
                src={item.images[0]}
                width="100%"
                height={200}
                objectFit="cover"
              />
              <Heading size={"md"}>{item.title}</Heading>
              <Heading size={"md"}>{item.brand}</Heading>
              <Text>{item?.price?.toLocaleString()}</Text>
            </GridItem>
          ))}
      </Grid>
    </Box>
  )
}

export default About
