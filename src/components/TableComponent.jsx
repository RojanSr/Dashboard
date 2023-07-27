import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const TableComponent = () => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Pickup ID</Th>
            <Th>Address</Th>
            <Th>Pickup Date</Th>
            <Th>Time From</Th>
            <Th>Time To</Th>
            <Th>Mode</Th>
            <Th>PTP Amt</Th>
            <Th>Allocated To</Th>
            <Th>Amt Paid</Th>
            <Th>PTP Met</Th>
            <Th>PTP Cancel</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1000001521</Td>
            <Td>Office Address</Td>
            <Td>09 Aug 2023</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
