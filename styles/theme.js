import { extendTheme } from "@chakra-ui/react";
import { badgeStyles } from "../pages/components/badge";
import { buttonStyles } from "../pages/components/button";
import { globalStyles } from "./styles";
import { breakpoints } from "@chakra-ui/utils";
export default extendTheme(
  { breakpoints },
  globalStyles,
  buttonStyles,
  badgeStyles
);
