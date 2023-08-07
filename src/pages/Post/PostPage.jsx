import { Box, Text } from "@chakra-ui/react";
import { mifin_colors } from "../../theme/color";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PostTable from "./PostTable";

const PostPage = () => {
  const tableHeadings = ["ID", "Title", "Body", "Actions"];

  // Create function to fetch Posts data from api;
  async function fetchPostsData() {
    try {
      return axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data);
    } catch (err) {
      console.error(err);
    }
  }

  const { isLoading, isError, data, error } = useQuery(
    ["posts"],
    fetchPostsData
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
        Posts
      </Text>
      <PostTable headings={tableHeadings} data={data} />
    </Box>
  );
};

export default PostPage;
