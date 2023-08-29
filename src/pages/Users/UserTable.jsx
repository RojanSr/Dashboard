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
  Box,
} from "@chakra-ui/react";
import TruncText from "../../utils/TruncText";
import { useRef, useState } from "react";
import CrudModal from "../../components/modal/CrudModal";

const UserTable = ({ headings, data, inputs }) => {
  const [editView, setEditView] = useState("");
  const [modalData, setModalData] = useState([]);
  const [id, setId] = useState(null);

  const modalRef = useRef(null);

  function handleModal(
    val,
    username,
    email,
    address,
    phone,
    website,
    company,
    id
  ) {
    setEditView(val);
    setModalData([username, email, address, phone, website, company, id]);
    modalRef.current.open();
  }

  return (
    <TableContainer
      borderRadius="16px"
      overflowX="auto"
      fontSize={{ base: "10px", lg: "12px", xl: "12px" }}
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
              <Td>
                <TruncText text={el.address.street} />
              </Td>
              <Td>{el.phone}</Td>
              <Td>{el.website}</Td>
              <Td>
                <TruncText text={el.company.name} />
              </Td>
              <Td>
                <Flex gap="12px">
                  <Box
                    title="Edit"
                    onClick={() =>
                      handleModal(
                        "Edit",
                        el.username,
                        el.email,
                        el.address.street,
                        el.phone,
                        el.website,
                        el.company.name,
                        el.id
                      )
                    }
                    cursor="pointer"
                  >
                    <EditIcon boxSize={6} color="blackAlpha.800" />
                  </Box>
                  <Box
                    title="Delete"
                    cursor="pointer"
                    onClick={() => {
                      handleModal("Delete");
                      setId(el.id);
                    }}
                  >
                    <DeleteIcon boxSize={6} color="blackAlpha.800" />
                  </Box>
                  <Box
                    title="View"
                    onClick={() =>
                      handleModal(
                        "View",
                        el.username,
                        el.email,
                        el.address.street,
                        el.phone,
                        el.website,
                        el.company.name,
                        el.id
                      )
                    }
                    cursor="pointer"
                  >
                    <ViewIcon boxSize={6} color="blackAlpha.800" />
                  </Box>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <CrudModal
        ref={modalRef}
        action={editView}
        inputs={inputs}
        values={modalData}
        id={id}
        users
      />
    </TableContainer>
  );
};

export default UserTable;
