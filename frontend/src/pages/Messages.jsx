import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Avatar,
  Input,
  Button,
  Textarea,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { sender: "me", text: inputValue }]);
      setInputValue("");
    }
  };

  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"10px 1fr 1px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      {/* User list on the left side */}
      <GridItem width="100%" height="400" backgroundColor="gray.200" padding="4">
        {users.map((user) => (
          <Flex
            key={user.id}
            alignItems="center"
            justifyContent="space-between"
            marginBottom="2"
          >
            <Avatar name={user.name} />
            <Text>{user.name}</Text>
          </Flex>
        ))}
      </GridItem>

      {/* Chat section on the right side */}
      <GridItem width="100%" backgroundColor="gray.300" padding="200">
        <Box height="150px" overflowY="auto" padding="2">
          {messages.map((message, index) => (
            <Box key={index} marginBottom="2">
              <Flex alignItems="center">
                <Avatar name={message.sender === "me" ? "You" : "Other"} />
                <Text>
                  {message.sender}: {message.text}
                </Text>
              </Flex>
            </Box>
          ))}
        </Box>

        <Flex alignItems="center" justifyContent="space-between">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message"
            width="80%"
            marginRight="2"
          />
          <Button onClick={sendMessage} colorScheme="blue">
            Send
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
};

const users = [
  { id: 1, name: "John Doe", email: "johndoe@example.com" },
  { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
  // Add more user objects here
];

export default Messages;
