import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Box, Image, Text, Flex, useTheme, Grid } from "@chakra-ui/react";

const Item = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${product.id}`);
  };

  const theme = useTheme();
  return (
    <Box  cursor='pointer' onClick={handleNavigate} rounded='20px'boxShadow='0px 0px 10px 10px rgba(0,0,0,0.1)' maxW="250px" p='1rem' transition='all 0.2s ease' _hover={{ transform: 'scale(1.1)' }}>
      <Image variant="top" src={product.image} maxW="200px" maxH="200px" />
      <Grid gap='0'>
        <Text fontFamily={theme.fonts.primary} fontSize='xl'>{product.title}</Text>
        <Text fontFamily={theme.fonts.primary} fontSize='xl'>${product.price}</Text>
      </Grid>
    </Box>
  );
};

export default Item;
