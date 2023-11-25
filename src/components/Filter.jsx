import { Flex, Input, Button } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CardProvider } from "../context/cardContext"
import axios from "axios"
const Filter = () => {
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()
  let { state, setState } = useContext(CardProvider)
  let onSearch = async () => {
    await axios
      .get(`https://dummyjson.com/products/search?q=${inputValue}`)
      .then((res) => setState(res.data))
  }
  const navi = () => {
    navigate(`/search?q=${inputValue}`)
    onSearch()
  }
  return (
    <Flex my={"30px"}>
      <Input
        onKeyUp={(e) => {
          e.key == "Enter" ? navi() : ""
        }}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <Button colorScheme="green" onClick={navi}>
        Search
      </Button>
    </Flex>
  )
}

export default Filter
