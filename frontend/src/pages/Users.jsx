import React, { useState } from "react";
import {
  ChevronDownIcon,
  DeleteIcon,
  EditIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Card,
  Box,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Users = () => {
  const [isOpen, setIsOpen] = useState([]);

  const toggleMenu = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  const deleteUser = (index) => {
    // Implement logic to delete user from the list
    console.log("Delete user with index:", index);
  };

  const editUser = (index) => {
    // Implement logic to edit user details
    console.log("Edit user with index:", index);
  };

  const viewUser = (index) => {
    // Implement logic to view user details
    console.log("View user with index:", index);
  };

  const userData = [
    {
      id: 1,
      name: "Rajdeep Biswas",
      email: "rajdeep@gamil.com",
      gender: "Male",
      userType: "Admin",
    },
    {
      id: 2,
      name: "Mohit Das",
      email: "mohitdas@gmail.com",
      gender: "Male",
      userType: "Admin",
    },
    {
      id: 3,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      gender: "Female",
      userType: "User",
    },
    {
      id: 4,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      gender: "Female",
      userType: "User",
    },
    {
      id: 5,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      gender: "Female",
      userType: "Admin",
    },
    // ... (add more user data as needed)
  ];

  return (
    <Card maxW="full" boxShadow="md">
      <Box p="6">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Sl No</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Gender</Th>
              <Th>User Type</Th>
              <Th>More Options</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData.map((user, index) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.gender}</Td>
                <Td>
                  <Badge
                    colorScheme={user.userType === "Admin" ? "green" : "yellow"}
                  >
                    {user.userType}
                  </Badge>
                </Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={ChevronDownIcon}
                      variant="outline"
                      colorScheme="teal"
                      onClick={() => toggleMenu(index)}
                    />
                    <MenuList isOpen={isOpen[index]}>
                      <MenuItem onClick={() => deleteUser(index)}>
                        <DeleteIcon /> Delete
                      </MenuItem>
                      <MenuItem onClick={() => editUser(index)}>
                        <EditIcon /> Edit
                      </MenuItem>
                      <MenuItem onClick={() => viewUser(index)}>
                        <ViewIcon />
                        View
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
};

export default Users;
