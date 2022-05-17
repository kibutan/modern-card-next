import { Box, HStack, Stack } from "@chakra-ui/react";
import Profile from "./components/Profile";
import Teams from "./components/Teams";
import Product from "./components/Product";

export default function Home() {
  return (
    <Box w="100vw" h="100vh">
      <HStack>
        <Profile />
        <Teams />
        <Product />
      </HStack>
    </Box>
  );
}
