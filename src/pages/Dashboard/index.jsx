import React, { Fragment } from "react";
import CaseCard from "../../components/caseCard";
import { Flex, Box, Select, VStack, Grid, GridItem } from "@chakra-ui/react";

const caseData = [
  { title: "Total Cases Allotted to Me", quantity: 65 },
  { title: "Non-Actioned Cases", quantity: 26, isImp: true, per: "15%" },
  { title: "Total Cases Allotted to Me", quantity: 21 },
  { title: "Total Cases Allotted to Me", quantity: 45, per: "85%" },
];

const filterData = [
  { name: "All Products", filter: ["Filter1", "Filter2"] },
  { name: "All Buckets", filter: ["Filter1", "Filter2"] },
  { name: "All States", filter: ["Filter1", "Filter2"] },
  { name: "All Branches", filter: ["Filter1", "Filter2"] },
  {
    name: "All Allocated to All",
    filter: ["All Allocated to All", "Filter1", "Filter2"],
  },
];

const Dashboard = () => {
  return (
    <VStack m="27px 35px">
      <Flex gap="19px">
        {caseData.map((el) => (
          <Fragment key={el.title}>
            <CaseCard
              isImportant={el.isImp}
              title={el.title}
              quantity={el.quantity}
              per={el.per}
            />
          </Fragment>
        ))}
      </Flex>

      <Flex mt="21px" gap="21px">
        {filterData.map((data) => (
          <Box p="8px 16px" key={data.name}>
            <Select
              placeholder={data.name}
              color="#3E4954"
              w="172px"
              variant="flushed"
              fontSize="15px"
              fontWeight="500"
            >
              {data.filter.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </Select>
          </Box>
        ))}
      </Flex>

      <Flex justifyContent="center" flexWrap="wrap" gap="25px" mt={2}>
        <Box
          minW="544px"
          minH="318px"
          boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.07)"
          borderRadius="15px"
          border="1px solid #E5EAF2"
        ></Box>
        <Box
          minW="544px"
          minH="318px"
          boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.07)"
          borderRadius="15px"
          border="1px solid #E5EAF2"
        ></Box>
        <Box
          minW="544px"
          minH="318px"
          boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.07)"
          borderRadius="15px"
          border="1px solid #E5EAF2"
        ></Box>
        <Box
          minW="544px"
          minH="318px"
          boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.07)"
          borderRadius="15px"
          border="1px solid #E5EAF2"
        ></Box>
        <Box
          minW="1120px"
          gridColumn="span"
          minH="580px"
          boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.07)"
          borderRadius="15px"
          border="1px solid #E5EAF2"
        ></Box>
      </Flex>
    </VStack>
  );
};

export default Dashboard;