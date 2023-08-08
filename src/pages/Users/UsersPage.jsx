import { Box, Flex, Text } from "@chakra-ui/react";
import { mifin_colors } from "../../theme/color";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserTable from "./UserTable";
import SecondaryBtn from "../../components/button/SecondaryBtn";

import { RotatingLines } from "react-loader-spinner";

const UsersPage = () => {
  const tableHeadings = [
    "ID",
    "Username",
    "Email",
    "Address",
    "Phone",
    "Website",
    "Company",
    "Actions",
  ];

  // Create function to fetch Posts data from api;
  function fetchUsersData() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  }

  const { isLoading, isError, data, error } = useQuery(
    ["users"],
    fetchUsersData
  );

  if (isLoading) {
    return (
      <Flex w="inherit" h="inherit" justifyContent="center" alignItems="center">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="35"
          visible={true}
        />
      </Flex>
    );
  }

  if (isError) {
    console.error(error);
    return <Box>Error on fetching data</Box>;
  }

  return (
    <Box mx={3} my={5}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mx={3}
      >
        <Text color={mifin_colors.primary} fontSize="28px" fontWeight="600">
          Users
        </Text>

        <SecondaryBtn name="Add New User" />
      </Box>
      <UserTable headings={tableHeadings} data={data.data} />
    </Box>
  );
};

export default UsersPage;
