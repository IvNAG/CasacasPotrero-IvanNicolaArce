import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount";
import { Shop } from "../../context/ShopProvider";
import "./styles.css";
import { Flex, Grid, Image, Text, useTheme } from "@chakra-ui/react";
const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  const { addItem } = useContext(Shop);

  const addCart = (qty) => {
    setQuantity(qty);
  };

  const handleFinish = () => {
    const productToSave = { ...product, qty: quantity };
    addItem(productToSave);
    navigate("/cart");
  };

  const theme = useTheme();

  return (
    <Flex w="100vw" h="90vh" justifyContent="center" alignContent="center" p='1rem'>
      <Grid border='2px solid #202020' rounded='20px' p='1rem'>
        <Image justifySelf='center' src={product.image} alt="" w='200px' h='250px' fit='cover'/>
        <Text fontFamily={theme.fonts.primary} fontSize='xl'>{product.title}</Text>
        <Text fontFamily={theme.fonts.primary} fontSize='xl'>{product.description}</Text>
        <Text fontFamily={theme.fonts.primary} fontSize='2xl'>${product.price}</Text>
        {!quantity ? (
          <ItemCount stock={10} initial={1} onAdd={addCart} />
        ) : (
          <button onClick={handleFinish}>Finalizar Compra</button>
        )}
      </Grid>
    </Flex>
  );
};

export default ItemDetail;
