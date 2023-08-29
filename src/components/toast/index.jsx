import { Box, useToast } from "@chakra-ui/react";

export default function ToastComp({ msg, position }) {
  const toast = useToast();
  toast({
    title: `${position} toast`,
    position: { position },
    isClosable: true,
    render: () => (
      <Box color="white" p={3} bg="blue.500" borderRadius="6px">
        {msg}
      </Box>
    ),
  });

  return <>Hello.</>;
}
