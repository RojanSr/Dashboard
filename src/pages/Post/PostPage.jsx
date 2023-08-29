import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { mifin_colors } from "../../theme/color";
import PostTable from "./PostTable";
import SecondaryBtn from "../../components/button/SecondaryBtn";

import CrudModal from "../../components/modal/CrudModal";
import { AddIcon, RepeatIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PostPage = () => {
  const modalRef = useRef(null);

  // Trigger modalOpen
  function handleModal() {
    modalRef.current.open();
  }

  // Heading for Posts Table
  const tableHeadings = ["ID", "Title", "Body", "Actions"];

  // Post modal inputs
  const modalInputs = [{ name: "Title" }, { name: "Body" }];

  function fetchPostsData() {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  }

  const { data, isLoading, error, isFetching, refetch, isError } = useQuery(
    ["posts"],
    fetchPostsData
  );

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  // Show spinner when loading or data is being fetched

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

  return (
    <Box mx={3} my={5}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mx={3}
      >
        <Text color={mifin_colors.primary} fontSize="28px" fontWeight="600">
          Posts
        </Text>
        <Box display="flex" gap="20px">
          <Box onClick={handleModal}>
            <SecondaryBtn name="Create New Post" icon={<AddIcon />} />
          </Box>
          <Box onClick={refetch} title="Refresh">
            <SecondaryBtn icon={<RepeatIcon />} />
          </Box>
        </Box>
      </Box>
      <PostTable
        headings={tableHeadings}
        data={data.data}
        inputs={modalInputs}
      />

      <CrudModal ref={modalRef} action="New Post" inputs={modalInputs} posts />
    </Box>
  );
};

export default PostPage;
