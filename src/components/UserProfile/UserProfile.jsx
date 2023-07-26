import React from "react";
import ProfileIcon from "../../assets/ProfileIcon.svg";
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
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, RepeatClockIcon } from "@chakra-ui/icons";
import LocationIcon from "../../assets/icon_location.svg";
import MessageIcon from "../../assets/icon_message.svg";
import UserProfileExtend from "./UserProfileExtend";

const UserProfile = () => {
  return (
    <Box
      mx="41px"
      my="24px"
      boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.07)"
      borderRadius="20px"
    >
      <Flex px="17px " py="15px" gap="32px">
        <Image
          src="https://shorturl.at/dvKQ3"
          w="128px"
          h="128px"
          borderRadius="16px"
        />
        <Flex color="#3E4954" direction="column" gap="10px">
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontSize="12px" opacity="0.5">
                Applicant
              </Text>
              <Flex alignItems="center" gap="19px">
                <Text fontSize="28px" fontWeight="600" color="#000">
                  Rohan Mehra
                </Text>
                <Image src={ProfileIcon} w="10.5px" h="11.5px" />
              </Flex>
            </Box>
            <Flex gap="24px" alignItems="center" ml="196px">
              <Flex alignItems="center">
                <PhoneIcon color="#2F4CDD" />
                <Text mx="3px">+91 9825361829</Text>
                <Image src={ProfileIcon} w="10.5px" h="8px" ml="3px" />
              </Flex>
              <Flex gap="8px" alignItems="center">
                <Image src={LocationIcon} w="14px" h="20px" />
                <Text>15 A Atlantis tower...</Text>
                <Image src={ProfileIcon} w="10.5px" h="8px" />
                <Image src={MessageIcon} w="22px" h="15px" mx="22px" />
                <Divider
                  h="50px"
                  orientation="vertical"
                  color="#000"
                  opacity="0.6"
                />
              </Flex>
              <Flex direction="column">
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
              />

              <Box>
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
          </Flex>
          <Flex gap="40px">
            <Flex gap="16px">
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
            <Flex gap="10px">
              <Button
                color="#2F4CDD"
                fontSize="14px"
                fontWeight="500"
                bg="none"
                border="1px solid #2F4CDD"
                p="4px 16px"
              >
                SOA
              </Button>
              <Button
                color="#2F4CDD"
                fontSize="14px"
                fontWeight="500"
                bg="none"
                border="1px solid #2F4CDD"
                p="4px 16px"
              >
                Stat-Card
              </Button>
              <Button
                color="#2F4CDD"
                fontSize="14px"
                fontWeight="500"
                bg="none"
                border="1px solid #2F4CDD"
                p="4px 16px"
              >
                Repayment Schedule
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Divider ml="18px" mr="18px" />
      <UserProfileExtend />
    </Box>
  );
};

export default UserProfile;
