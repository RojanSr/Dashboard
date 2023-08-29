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
import { useState, useRef } from "react";
import CrudModal from "../../components/modal/CrudModal";

const PostTable = ({ headings, data, inputs }) => {
  const [editView, setEditView] = useState("");
  const [modalData, setModalData] = useState([]);
  const [id, setId] = useState(null);

  const modalRef = useRef(null);

  function handleModal(val, title, body, id) {
    setEditView(val);
    setModalData([title, body, id]);
    modalRef.current.open();
  }

  return (
    <TableContainer
      borderRadius="16px"
      overflowX="auto"
      fontSize={{ base: "10px", lg: "14px", xl: "14px" }}
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
                <Flex gap="12px">
                  <Box
                    title="Edit"
                    onClick={() =>
                      handleModal("Edit", el.title, el.body, el.id)
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
                      handleModal("View", el.title, el.body, el.id)
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
        posts
      />
    </TableContainer>
  );
};

export default PostTable;
