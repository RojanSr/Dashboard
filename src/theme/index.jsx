import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "'Poppins', sans-serif",
      },
      a: {
        _hover: {
          textDecoration: "none !important",
          outline: "none !important",
          border: "0px !important",
        },
      },
    },
  },
});
