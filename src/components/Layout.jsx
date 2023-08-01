import React, { useState } from "react";
import Header from "./header/Header";
import { Grid, Box, GridItem, Flex, calc } from "@chakra-ui/react";
import Sidebar from "./sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function updateOpenState() {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <Flex minH="100vh">
      <Sidebar toggleBar={updateOpenState} isOpen={isOpen} />

      <Box
        flexGrow={1}
        display="flex"
        flexDirection="column"
        maxW={{ base: "100vw", lg: isOpen ? "84vw" : "100vw" }}
        boxShadow={"0 0 10px 0 rgba(0,0,0,0.5)"}
        transform={{ base: "", lg: isOpen && "translateX(16vw)" }}
      >
        <Box
          flex={1}
          mb={0}
          top={0}
          h="fit-content"
          w="full"
          position="sticky"
          bg="#fff"
          zIndex="1"
        >
          <Header toggleBar={updateOpenState} isOpen={isOpen} />
        </Box>
        <Box
          // px={{ sm: 4, md: 8 }}
          pt={0}
          pb={6}
          h="full"
          display="flex"
          position={"relative"}
          flexDirection="column"
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
