import React, { Fragment, useState } from "react";
import ProfileIcon from "../../assets/ProfileIcon.svg";
import EditPicture from "../../assets/edit_picture.svg";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Progress,
  Divider,
  Tag,
  TagLabel,
  TagCloseButton,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, RepeatClockIcon } from "@chakra-ui/icons";
import LocationIcon from "../../assets/icon_location.svg";
import MessageIcon from "../../assets/icon_message.svg";
import UserProfileExtend from "./UserProfileExtend";
import UserPhoto from "../../assets/UserPhoto.svg";
import ShowIcon from "../../assets/showIcon.svg";
import SecondaryBtn from "../button/SecondaryBtn";
import UserStat from "./UserStat";

const UserProfile = () => {
  const [tags, setTags] = useState(["Tag 1", "Tag 2"]);
  const btns = [
    { name: "SOA" },
    { name: "Stat Card" },
    { name: "Repayment-Schedule" },
  ];

  function handleRemoveTag(index) {
    const filteredTag = tags.filter((el, i) => i !== index);
    setTags(filteredTag);
  }

  function handleAddTag() {
    if (tags.length == 5) {
      return;
    }
    const newTag = "Tag " + (tags.length + 1);
    setTags((prev) => [...prev, newTag]);
  }

  const { isOpen, onToggle } = useDisclosure();

  const data = [
    { property: "Sanctioned Amount", value: "Rs. 500000" },
    { property: "Branch", value: "Alwar" },
    { property: "Product", value: "CDL Product" },
    { property: "Tenure ", value: "24M 15D" },
    { property: "Interest Rate ", value: "7.1%" },
    { property: "Customer Code ", value: "CN000000000000644" },
    { property: "Prospect No ", value: "172638384" },
    { property: "NPA Stage ", value: "Regular" },
  ];
  return (
    <Box
      mx="16px"
      mb="26.5px"
      boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.07)"
      borderRadius="20px"
      pos="relative"
    >
      <Flex px="17px " py="15px" gap="32px">
        <Box
          pos="relative"
          minW={{ base: "70px", md: "128px" }}
          minH={{ base: "70px", md: "128px" }}
          maxH={{ base: "70px", md: "128px" }}
          maxW={{ base: "70px", md: "128px" }}
        >
          <Image src={UserPhoto} borderRadius="16px" />
          <Image
            src={EditPicture}
            w="30px"
            h="30px"
            pos="absolute"
            bottom="0"
            right="0"
            cursor="pointer"
            _hover={{
              transform: "scale(1.11)",
            }}
            transition="0.1s ease-in"
          />
        </Box>
        <Flex color="#3E4954" direction="column" gap="10px" flexGrow="1">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            display={{ md: "block", lg: "flex" }}
          >
            <Box>
              <Text fontSize="12px" opacity="0.5">
                Applicant
              </Text>
              <Flex alignItems="center" gap="19px">
                <Text
                  fontSize={{
                    base: "18px",
                    lg: "20px",
                    xl: "28px",
                  }}
                  fontWeight="600"
                  color="#000"
                  whiteSpace="nowrap"
                >
                  Rohan Mehra
                </Text>
                <Image src={ProfileIcon} w="20.5px" h="11.5px" />
              </Flex>
            </Box>
            <Flex
              alignItems="center"
              display={{ md: "block", lg: "flex" }}
              ml={{ base: "0px", lg: "30px", xl: "196px" }}
            >
              <Flex gap="24px">
                <Flex alignItems="center">
                  <PhoneIcon color="#2F4CDD" />
                  <Text mx="3px" fontSize="14px">
                    +91 9825361829
                  </Text>
                  <Image src={ProfileIcon} w="10.5px" h="8px" ml="3px" />
                </Flex>
                <Flex gap="8px" alignItems="center">
                  <Image src={LocationIcon} w="14px" h="20px" />
                  <Text fontSize="14px">15 A Atlantis tower...</Text>
                  <Image src={ProfileIcon} w="10.5px" h="8px" />
                  <Image src={MessageIcon} w="22px" h="15px" mx="22px" />
                  <Divider
                    h="50px"
                    orientation="vertical"
                    color="#000"
                    display={{ base: "none", md: "none", lg: "block" }}
                    opacity="0.6"
                  />
                </Flex>
              </Flex>
            </Flex>
            <Flex direction="column" mx="24px">
              <Text opacity="0.5" fontSize="12px" mb="6px">
                Overall Progress
              </Text>
              <Flex gap="12px">
                <Text fontSize="15px" fontWeight="700">
                  29%
                </Text>
                <Progress
                  value={29}
                  size="lg"
                  h="20px"
                  colorScheme="green"
                  borderRadius="20px"
                  w="118px"
                />
              </Flex>
            </Flex>
            <Divider
              h="50px"
              orientation="vertical"
              color="#000"
              opacity="0.6"
              display={{ base: "none", lg: "block" }}
            />

            <Box ml="24px">
              <Text opacity="0.5" fontSize="12px" mb="6px">
                Loan Status
              </Text>
              <Flex
                w="84px"
                h="23px"
                bgColor="#F17E14"
                borderRadius="4px"
                justifyContent="center"
                alignItems="center"
              >
                <Text color="#fff" fontSize="14px">
                  Pending
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex
            direction="column"
            gap="10px"
            display={{ base: "none", md: "none", lg: "flex" }}
          >
            <Flex
              gap="40px"
              maxW={{ lg: "500px", xl: "700px" }}
              rowGap="10px"
              flexWrap="wrap"
            >
              {data.map((el, index) => {
                return (
                  <Flex gap="16px" alignItems="center" key={index}>
                    <UserStat property={el.property} value={el.value} />
                    {data.length - 1 != index && (
                      <Divider orientation="vertical" h="24px" w="1px" />
                    )}
                  </Flex>
                );
              })}
            </Flex>
            <Flex justifyContent="space-between">
              <Flex gap="20px" alignItems="center">
                <Text opacity="0.5" fontSize="12px">
                  Tags
                </Text>
                {tags.map((tag, index) => (
                  <Tag
                    height="20px"
                    borderRadius="full"
                    variant="solid"
                    bgColor="#F1F1F1"
                    fontFamily="Roboto, sans-serif"
                    key={index}
                  >
                    <TagLabel fontSize="12px" color="#3E4954">
                      {tag}
                    </TagLabel>
                    <TagCloseButton
                      color="#000"
                      onClick={() => handleRemoveTag(index)}
                    />
                  </Tag>
                ))}
                <AddIcon
                  color="#2F4CDD"
                  w="14px"
                  h="14px"
                  cursor="pointer"
                  onClick={handleAddTag}
                />
                <RepeatClockIcon
                  color="#2F4CDD"
                  w="14px"
                  h="14px"
                  cursor="pointer"
                />
              </Flex>

              {/* User Dedicated Buttons */}

              <Flex gap="10px">
                {btns.map((btn) => (
                  <Fragment key={btn.name}>
                    <SecondaryBtn name={btn.name} />
                  </Fragment>
                ))}

                <Box onClick={onToggle} cursor="pointer">
                  <Image
                    src={ShowIcon}
                    pos={isOpen ? "absolute" : "initial"}
                    right="18px"
                    bottom="17px"
                    transform={isOpen ? "rotate(0deg)" : "rotate(180deg)"}
                  />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex justifyContent="center">
        <Divider w="95%" mx="8px" />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <UserProfileExtend />
      </Collapse>
    </Box>
  );
};

export default UserProfile;
