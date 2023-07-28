import { Grid, GridItem, Text, Image } from "@chakra-ui/react";
import ShowIcon from "../../assets/showIcon.svg";
import React, { Fragment } from "react";

function ItemGrid(props) {
  return (
    <GridItem>
      <Text opacity="0.7" fontSize="14px">
        {props.name}
      </Text>
      <Text color="#3E4954" fontSize="16px">
        {props.value}
      </Text>
    </GridItem>
  );
}

const UserProfileExtend = () => {
  const data = [
    { name: "Prospect No.", value: "CDL000000000947" },
    { name: "Sanctioned Amount", value: "500000" },
    { name: "Branch", value: "Alwar" },
    { name: "Product", value: "CDL Product" },
    { name: "Instalment Amount.", value: "-" },
    { name: "Tenure", value: "24M 15D" },
    { name: "Interest RT", value: "-" },
    { name: "Scheme", value: "CDL Scheme" },
    { name: "Sanction Date", value: "16 May 2024" },
    { name: "Frequency", value: "-" },
    { name: "NPA Stage", value: "Regular" },
    { name: "Last Tranch", value: "None" },
    { name: "Instalment Start Date", value: "-" },
    { name: "Instalment Type", value: "-" },
    { name: "Customer Code.", value: "CN000000000000644" },
    { name: "Entity Type", value: "Individual" },
    { name: "Group", value: "Adaptwise" },
    { name: "App Form No.", value: "T65Y6749" },
    { name: "Effective Rate", value: "-" },
    { name: "NACH Status", value: "-" },
    { name: "Processed", value: "No" },
  ];

  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4, 1fr)",
        }}
        mx="51px"
        mt="30px"
        pb="41px"
        gap="25px"
        display={{ base: "none", md: "grid" }}
      >
        {data.map((val, index) => (
          <Fragment key={index}>
            <ItemGrid name={val.name} value={val.value} />
          </Fragment>
        ))}
      </Grid>
    </>
  );
};

export default UserProfileExtend;
