import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
} from "@chakra-ui/react";
import TruncText from "../../utils/TruncText";

const PostTable = ({ headings, data }) => {
  const truncateLength = 50;
  return (
    <TableContainer
      borderRadius="16px"
      px={4}
      overflowX="hidden"
      fontSize="14px"
    >
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            {headings.map((el) => (
              <Th key={el} maxW="100px">
                {el}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((el) => (
            <Tr key={el.id}>
              <Td>{el.id}</Td>
              <Td>
                <TruncText text={el.title} />
              </Td>
              <Td>
                <TruncText text={el.body} />
              </Td>
              <Td>
                <Flex gap="8px">
                  <EditIcon boxSize={6} color="blackAlpha.800" />
                  <DeleteIcon boxSize={6} color="blackAlpha.800" />
                  <ViewIcon boxSize={6} color="blackAlpha.800" />
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PostTable;
