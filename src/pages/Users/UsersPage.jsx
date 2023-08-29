import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { mifin_colors } from "../../theme/color";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserTable from "./UserTable";
import SecondaryBtn from "../../components/button/SecondaryBtn";

import CrudModal from "../../components/modal/CrudModal";
import { AddIcon, RepeatIcon } from "@chakra-ui/icons";
import { useRef } from "react";

const UsersPage = () => {
  const modalRef = useRef(null);

  // Triger Modal Open
  function handleModal() {
    modalRef.current.open();
  }

  // Table Headings for Users table
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
  // Post modal inputs
  const modalInputs = [
    { name: "Username" },
    { name: "Email" },
    { name: "Address" },
    { name: "Phone" },
    { name: "Website" },
    { name: "Company" },
  ];

  // Create function to fetch Posts data from api;
  function fetchUsersData() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  }

  const { isLoading, isError, data, error, isFetching, refetch } = useQuery(
    ["users"],
    fetchUsersData
  );

  if (isLoading || isFetching) {
    return (
      <Flex w="inherit" h="inherit" justifyContent="center" alignItems="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="lg"
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

        <Box display="flex" gap="20px">
          <Box onClick={handleModal}>
            <SecondaryBtn name="Add New User" icon={<AddIcon />} />
          </Box>
          <Box onClick={refetch} title="Refresh">
            <SecondaryBtn icon={<RepeatIcon />} />
          </Box>
        </Box>
      </Box>
      <UserTable
        headings={tableHeadings}
        data={data.data}
        inputs={modalInputs}
      />
      <CrudModal ref={modalRef} action="New User" inputs={modalInputs} users />
    </Box>
  );
};

export default UsersPage;
