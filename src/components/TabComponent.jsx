import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";
import ActionHistory from "../pages/Contact/PTPTabActions/ActionHistory";
import PTPlog from "../pages/Contact/PTPTabActions/PTPLog";
import EscalationHistory from "../pages/Contact/PTPTabActions/EscalationHistory";
import AllocationHistory from "../pages/Contact/PTPTabActions/AllocationHistory";
import DunningHistory from "../pages/Contact/PTPTabActions/DunningHistory";
import SecondaryBtn from "./button/SecondaryBtn";

const tabData = [
  { name: "Action History" },
  { name: "PTP Log" },
  { name: "Escalation History" },
  { name: "Allocation History" },
  { name: "Dunning History" },
];

const TabComponent = () => {
  return (
    <Tabs>
      <TabList fontSize="15px">
        {tabData.map((tab) => (
          <Box key={tab.name}>
            <Tab
              _selected={{
                fontWeight: "700",
                color: "#2F4CDD",
                borderBottom: "2px",
              }}
              transition="0.1s ease-in"
            >
              {tab.name}
            </Tab>
          </Box>
        ))}
      </TabList>

      <InputGroup w="338px" mt="32px">
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          type="tel"
          placeholder="Search here"
          _focus={{
            boxShadow: "0 0 0 rgb(255, 255, 255)",
            borderColor: "rgba(0, 0, 0, 0.15)",
          }}
        />
      </InputGroup>

      <TabPanels ml={"-4"}>
        <TabPanel>
          <ActionHistory />
        </TabPanel>
        <TabPanel>
          <PTPlog />
        </TabPanel>
        <TabPanel>
          <EscalationHistory />
        </TabPanel>
        <TabPanel>
          <AllocationHistory />
        </TabPanel>
        <TabPanel>
          <DunningHistory />
        </TabPanel>
      </TabPanels>
      <VStack my="22px">
        <SecondaryBtn name="View All" />
      </VStack>
    </Tabs>
  );
};

export default TabComponent;
