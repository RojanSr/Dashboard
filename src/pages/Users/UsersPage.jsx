import { Box, Text } from "@chakra-ui/react";
import { mifin_colors } from "../../theme/color";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserTable from "./UserTable";

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
  async function fetchUsersData() {
    try {
      return axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.data);
    } catch (err) {
      console.error(err);
    }
  }

  const { isLoading, isError, data, error } = useQuery(
    ["users"],
    fetchUsersData
  );

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  if (isError) {
    console.error(error);
    return <Box>Error on fetching data</Box>;
  }

  console.log(data);

  return (
    <Box mx={3} my={5}>
      <Text color={mifin_colors.primary} fontSize="28px" fontWeight="600">
        Users
      </Text>
      <UserTable headings={tableHeadings} data={data} />
    </Box>
  );
};

export default UsersPage;
