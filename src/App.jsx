import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import BodyComponent from "./components/BodyComponent";
import CollectionTabSection from "./components/collectionTabs";
const App = () => {
  return (
    <Box fontFamily="'Poppins', 'sans-serif'">
      <Header />
      <BodyComponent />
    </Box>
  );
};

export default App;
