import { Box, Center, Divider, HStack, Spacer, Stack } from "@chakra-ui/react";
import Profile from "./components/Profile";
import Teams from "./components/Teams";
import Product from "./components/Product";
import Glass from "./components/Glass";

export default function Home() {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgImage="/mountain.jpg"
      bgPosition="center"
      bgRepeat="no-repeat"
      alignContent="center"
      alignItems="center"
      justifyContent="center"
    >
      <HStack>
        <Profile />
        <Teams />
        <Product />
      </HStack>
      <Divider />
      <Glass />
    </Box>
  );
}
