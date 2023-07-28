import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import FloatTool from "./components/FloatTool";
const App = () => {
  return (
    <Box fontFamily="'Poppins', 'sans-serif'" maxW="100vw" overflow="hidden">
      <Header />
      <BodyComponent />
      <FooterComponent />
      <FloatTool />
    </Box>
  );
};

export default App;
