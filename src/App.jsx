import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import BodyComponent from "./components/BodyComponent";
import FloatTool from "./components/FloatTool";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Box fontFamily="'Poppins', 'sans-serif'" maxW="100vw" overflow="hidden">
      <Header />
      <BodyComponent />
      <Footer />
      <FloatTool />
    </Box>
  );
};

export default App;
