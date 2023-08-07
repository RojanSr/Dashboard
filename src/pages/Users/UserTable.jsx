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

const UserTable = ({ headings, data }) => {
  console.log(data, "data");
  const truncateLength = 50;

  return (
    <TableContainer
      borderRadius="16px"
      overflowX="hidden"
      fontSize={{ lg: "12px", xl: "12px" }}
    >
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            {headings.map((el) => (
              <Th key={el}>{el}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((el) => (
            <Tr key={el.id}>
              <Td>{el.id}</Td>
              <Td>{el.username}</Td>
              <Td>{el.email}</Td>
              <Td>{el.address.street}</Td>
              <Td>{el.phone}</Td>
              <Td>{el.website}</Td>
              <Td>
                <TruncText text={el.company.name} />
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

export default UserTable;
