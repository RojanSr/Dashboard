import React, { Fragment } from "react";
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

const UserProfile = () => {
  const btns = [
    { name: "SOA" },
    { name: "Stat Card" },
    { name: "Repayment-Schedule" },
  ];

  const { isOpen, onToggle } = useDisclosure();
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
            <Flex gap="40px">
              <Flex gap="16px" alignItems="center">
                <Text fontSize="12px" opacity="0.5">
                  Sanctioned Amount
                </Text>
                <Text fontSize="14px">Rs. 500000</Text>
              </Flex>
              <Flex gap="16px">
                <Text fontSize="12px" opacity="0.5">
                  Branch:
                </Text>
                <Text fontSize="14px">Alwar</Text>
              </Flex>
              <Flex gap="16px">
                <Text fontSize="12px" opacity="0.5">
                  Product
                </Text>
                <Text fontSize="14px">CDL Product</Text>
              </Flex>
              <Flex gap="16px">
                <Text fontSize="12px" opacity="0.5">
                  Tenure
                </Text>
                <Text fontSize="14px">24M 15D</Text>
              </Flex>
              <Flex gap="16px">
                <Text fontSize="12px" opacity="0.5">
                  Interest Rate
                </Text>
                <Text fontSize="14px">7.1%</Text>
              </Flex>
            </Flex>
            <Flex gap="40px">
              <Flex gap="16px">
                <Text fontSize="12px" opacity="0.5">
                  Customer Code
                </Text>
                <Text fontSize="14px">CN000000000000644</Text>
              </Flex>
              <Flex gap="16px">
                <Text fontSize="12px" opacity="0.5">
                  Prospect No
                </Text>
                <Text fontSize="14px"> 172638384</Text>
              </Flex>
              <Flex gap="16px">
                <Text fontSize="12px" opacity="0.5">
                  NPA Stage
                </Text>
                <Text fontSize="14px">Regular</Text>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between">
              <Flex gap="20px" alignItems="center">
                <Text opacity="0.5" fontSize="12px">
                  Tags
                </Text>
                <Tag
                  height="20px"
                  width="94px"
                  borderRadius="full"
                  variant="solid"
                  bgColor="#F1F1F1"
                  fontFamily="Roboto, sans-serif"
                >
                  <TagLabel fontSize="12px" color="#3E4954">
                    Tag name
                  </TagLabel>
                  <TagCloseButton color="#000" />
                </Tag>
                <Tag
                  height="20px"
                  width="94px"
                  borderRadius="full"
                  variant="solid"
                  bgColor="#F1F1F1"
                  fontFamily="Roboto, sans-serif"
                >
                  <TagLabel fontSize="12px" color="#3E4954">
                    Tag name
                  </TagLabel>
                  <TagCloseButton color="#000" />
                </Tag>
                <AddIcon color="#2F4CDD" w="14px" h="14px" cursor="pointer" />
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
