import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { forwardRef, useImperativeHandle, useRef } from "react";

// Initializing dynamic state variable
let stateVal = {};

const CrudModal = forwardRef((props, ref) => {
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [values, setValues] = useState({});

  const toast = useToast();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          onOpen();
        },
      };
    },
    []
  );

  if (isOpen) {
    // Create an initial state since state values differ in Modal
    props.inputs.forEach((el, i) => {
      stateVal[el.name] = props.values ? props.values[i] : "";
    });
  }
  if (!isOpen) {
    stateVal = {};
  }

  function handleChange(e, name) {
    stateVal = { ...stateVal, [name]: e.target.value };
  }
  const createPostMutation = useMutation(
    (newPost) =>
      axios.post("https://jsonplaceholder.typicode.com/posts", newPost),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
        // <ToastComp msg="Post Created" position="bottom-left" />;
        toast({
          position: "bottom-left",
          isClosable: true,
          render: () => (
            <Box color="white" p={3} bg="green.400" borderRadius="6px">
              New Post Created!
            </Box>
          ),
        });
      },
    }
  );

  const updatePostMutation = useMutation(
    (newPost) =>
      axios.put("https://jsonplaceholder.typicode.com/posts/1", newPost),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
        toast({
          position: "bottom-left",
          isClosable: true,
          render: () => (
            <Box color="white" p={3} bg="green.400" borderRadius="6px">
              Post Updated!
            </Box>
          ),
        });
      },
    }
  );
  const createUserMutation = useMutation(
    (newUser) =>
      axios.post("https://jsonplaceholder.typicode.com/users", newUser),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
        toast({
          position: "bottom-left",
          isClosable: true,
          render: () => (
            <Box color="white" p={3} bg="green.400" borderRadius="6px">
              New User Created!
            </Box>
          ),
        });
      },
    }
  );
  const updateUserMutation = useMutation(
    (newUser) =>
      axios.put("https://jsonplaceholder.typicode.com/users/1", newUser),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
        toast({
          position: "bottom-left",
          isClosable: true,
          render: () => (
            <Box color="white" p={3} bg="green.400" borderRadius="6px">
              User Updated!!
            </Box>
          ),
        });
      },
    }
  );

  const deletePostMutation = useMutation(
    (delPost) =>
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${delPost}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
        toast({
          position: "bottom-left",
          isClosable: true,
          render: () => (
            <Box color="white" p={3} bg="red.400" borderRadius="6px">
              Post Removed
            </Box>
          ),
        });
      },
    }
  );
  const deleteUserMutation = useMutation(
    (delUser) =>
      axios.delete(`https://jsonplaceholder.typicode.com/users/${delUser}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
        toast({
          position: "bottom-left",
          isClosable: true,
          render: () => (
            <Box color="white" p={3} bg="red.400" borderRadius="6px">
              User Removed
            </Box>
          ),
        });
      },
    }
  );

  const handleDone = async () => {
    // setValues(stateVal);
    onClose();
    const newPost = { ...stateVal, userId: 1 };

    if (props.posts) {
      if (props.action == "Delete") {
        await deletePostMutation.mutateAsync(props.id);
        return;
      }

      if (props.values) {
        await updatePostMutation.mutateAsync(JSON.stringify(newPost));
      } else {
        await createPostMutation.mutateAsync(JSON.stringify(newPost));
      }
    }

    if (props.users) {
      if (props.action == "Delete") {
        await deleteUserMutation.mutateAsync(props.id);
        return;
      }
      if (props.values) {
        await updateUserMutation.mutateAsync(JSON.stringify(newPost));
      } else {
        await createUserMutation.mutateAsync(JSON.stringify(newPost));
      }
    }
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.action}</ModalHeader>
          <ModalCloseButton
            borderRadius="50%"
            _hover={{ bg: "rgba(0,0,0,0.2)" }}
          />
          <ModalBody>
            {/* Perform Delete Action  */}
            {props.action == "Delete" ? (
              <>
                <Text>
                  Are you sure you want to delete this{" "}
                  {props.posts ? "post" : "user"}?
                </Text>
              </>
            ) : (
              <>
                {/* Check if props has inputs array for to render form */}
                {props.inputs &&
                  props.inputs.map((inp, i) => {
                    return (
                      <FormControl mt={4} key={inp.name}>
                        <FormLabel>{inp.name}</FormLabel>

                        {/* Check if Action is View  */}
                        {props.action == "View" ? (
                          <>
                            <Box
                              border="2px solid rgba(0,0,0,0.2)"
                              p={2}
                              borderRadius="12px"
                            >
                              {props.values ? props.values[i] : ""}
                            </Box>
                          </>
                        ) : (
                          <>
                            {inp.name == "Body" ? (
                              <Textarea
                                ref={i == 0 ? initialRef : null}
                                placeholder={inp.name}
                                defaultValue={
                                  props.values ? props.values[i] : ""
                                }
                                onChange={(e) => handleChange(e, inp.name)}
                                resize="none"
                              ></Textarea>
                            ) : (
                              <Input
                                ref={i == 0 ? initialRef : null}
                                placeholder={inp.name}
                                defaultValue={
                                  props.values ? props.values[i] : ""
                                }
                                onChange={(e) => handleChange(e, inp.name)}
                              />
                            )}
                          </>
                        )}
                      </FormControl>
                    );
                  })}
              </>
            )}
          </ModalBody>

          <ModalFooter>
            {props.action == "Delete" ? (
              <>
                <Button colorScheme="red" mr={3} onClick={handleDone}>
                  Delete
                </Button>
                <Button colorScheme="gray" onClick={onClose}>
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                colorScheme="blue"
                mr={3}
                onClick={props.action == "View" ? onClose : handleDone}
              >
                Done
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});

export default CrudModal;
