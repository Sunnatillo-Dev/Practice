import React, { useContext } from "react"
import { CardProvider } from "../context/cardContext"
import { Grid, GridItem, Image, Text } from "@chakra-ui/react"

const Search = () => {
  let { state } = useContext(CardProvider)
  return (
    <Grid gap={"20px"} templateColumns={"repeat(4,1fr)"}>
      {state.products?.map((item) => {
        return (
          <GridItem key={item.id}>
            <Image
              width={"100%"}
              objectFit={"cover"}
              height={"300px"}
              src={item.thumbnail}
            />
            <Text>{item.title}</Text>
          </GridItem>
        )
      })}
    </Grid>
  )
}

export default Search
