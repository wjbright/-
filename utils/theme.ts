// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    deepBlue: "#0B132B",
    lightBlue: "#E3F2FD",
    logoBlue: "#108CE5",
    brown: "#CE8147",
    yellow: "#ECDD7B",
    black: "#08090A",
  },
};

const theme = extendTheme({ colors });

export default theme;
