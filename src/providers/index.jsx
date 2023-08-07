import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { theme } from "../theme";

const queryClient = new QueryClient();

const Provider = ({ children }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default Provider;
