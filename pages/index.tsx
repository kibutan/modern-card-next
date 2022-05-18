import { Box, HStack, Stack } from "@chakra-ui/react";
import Profile from "./components/Profile";
import Teams from "./components/Teams";
import Product from "./components/Product";

export default function Home() {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgImage="/mountain.jpg"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <HStack>
        <Profile />
        <Teams />
        <Product />
      </HStack>
    </Box>
  );
}
