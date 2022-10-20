import React from "react";
import { useCart } from "../../context/ShopProvider";
import { FaTrashAlt } from "react-icons/fa";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import {
  Flex,
  Grid,
  Text,
  Icon,
  Button,
  Image,
  Box,
  useTheme,
  Input,
} from "@chakra-ui/react";

const Cart = () => {
  const { cart, removeItem, emptyCart, cartTotal } = useCart();
  const total = cartTotal();

  const [datos, setDatos] = useState({
    nombre: "",
    direccion: "",
    mail: "",
    numero: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
  };

  const theme = useTheme();

  const order = {
    buyer: {
      name: "Ivan",
      email: "ivan@gmail.com",
      phone: "12122122",
      address: "Av.Independencia",
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      qty: product.qty,
    })),
    total: cartTotal(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, datos).then(({ id }) => console.log(id));
  };
  return (
    <>
      {cart.length === 0 ? (
        <>
          <Text>No hay items en el carrito</Text>
        </>
      ) : (
        <>
          <Grid fontFamily={theme.fonts.primary} fontSize="xl" w="100vw">
            <Grid templateColumns="repeat(3, 1fr)" justifyContent="center" m='5vh 5vh 5vh 5vh' gap='4rem' >
              {cart.map((product) => {
                return (
                  <>
                    <Grid maxW="300px" border='1px solid #202020' p='1rem' rounded='20px'>
                      <Text>x{product.qty}</Text>
                      <Image
                        width={200}
                        height={200}
                        justifySelf='center'
                        src={product.image}
                      ></Image>
                      <Text mt='0.5rem'>{product.title}</Text>
                      <Text fontSize='xl' color='#428540'>${product.price}</Text>
                      <Button onClick={() => removeItem(product.id)}>
                        Remover Producto
                      </Button>
                    </Grid>
                  </>
                );
              })}
            </Grid>
            <Grid mt="10vh" w="100vw" justifyContent="center">
              <Text fontFamily={theme.fonts.primary} fontSize="2xl" mb="0.5rem">
                Formulario
              </Text>
              <form onSubmit={enviarDatos}>
                <Grid w="400px" gap="1rem">
                  <Input
                    placeholder="Ingrese Nombre"
                    type="name"
                    name="nombre"
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Ingrese Mail"
                    type="mail"
                    name="mail"
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Ingrese Direccion"
                    type="text"
                    name="direccion"
                    onChange={handleInputChange}
                  />
                  <Input
                    placeholder="Ingrese un Numero de Contacto"
                    type="number"
                    name="numero"
                    onChange={handleInputChange}
                  />
                </Grid>
              </form>
              <Grid mt="1rem">
                <Flex justifyContent="center" gap="1rem">
                  <Button onClick={() => emptyCart()}>
                    Vaciar Carro
                    <FaTrashAlt />
                  </Button>
                  <Button onClick={handleClick}>Terminar Compra</Button>
                </Flex>
                <Text textAlign="center" color="#428540">
                  ${total}
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Cart;
