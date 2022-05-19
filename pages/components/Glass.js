import { Box, Input } from "@chakra-ui/react";

function Glass() {
  return (
    <Box
      h="200px"
      w="325px"
      backdropFilter="auto"
      backdropBlur="4px"
      bg="blackAlpha.400"
      //   borderTopColor="whiteAlpha.600"
      //   borderLeftColor="whiteAlpha.600"
      //   borderBottomColor="whiteAlpha.300"
      borderColor="blackAlpha.200"
      borderWidth="1px"
      borderStyle="solid"
      borderRadius="md"
      dropShadow="0px 8px 32px rgba(31, 38, 135, 0.37)"
    >
      <Box color="whiteAlpha.700">123456789012</Box>
    </Box>
  );
}

export default Glass;
