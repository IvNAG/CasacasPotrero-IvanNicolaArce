import React from "react";
import Item from "../Item";
import { Flex, Box, Grid } from "@chakra-ui/react";

const ItemList = ({ products }) => {
  // console.log(products);
  return (
    <Grid w="100%"  justifyContent='center' templateColumns='repeat(3, 1fr)' justifyItems='center' gap='1rem'>
      {products.map((product) => {
        return (
          <>
            <Flex h='auto' mt='5vh'>
              <Item key={product.id} product={product} />
            </Flex>
          </>
        );
      })}
    </Grid>
  );
};

export default ItemList;
