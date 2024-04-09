import React, { useState } from "react";
import {
  Flex,
  Box,
  Image,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Divider,
  useColorMode,
  Switch,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Stack,
  Button,
  Badge,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  MoonIcon,
  SunIcon,
  EmailIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import Logo1 from "../Logo/LogoB.png";
import Logo2 from "../Logo/LogoW.png";
import { Text } from "@chakra-ui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1px"
      bg={colorMode === "dark" ? "#1A202C" : "white"} // Adjust background color
      color={colorMode === "dark" ? "white" : "black"} // Adjust text color
      boxShadow="0 4px 6px -1px rgba(0,0,0,0.3), 0 2px 4px -1px rgba(0,0,0,0.06)"
      overflow="auto"
    >
      <Flex align="center">
        <Box mr="auto">
          {colorMode === "dark" ? (
            <Image
              src={Logo2}
              alt="Dark Logo"
              style={{ width: "210px", height: "70px" }}
            />
          ) : (
            <Image
              src={Logo1}
              alt="Light Logo"
              style={{ width: "210px", height: "70px" }}
            />
          )}
        </Box>
      </Flex>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={toggleDrawer}
        cursor="pointer"
      >
        <IconButton
          icon={<HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Drawer"
          fontSize="24px"
          color={colorMode === "dark" ? "white" : "#385A64"} // Adjust icon color
          _hover={{ color: colorMode === "dark" ? "#00DFC0" : "#00DFC0" }} // Adjust hover color
        />
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={toggleDrawer}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              {/* ... (other menu items) */}
              <Divider my="2" />
              <Flex align="center" justify="space-between">
                <Text
                  fontSize="lg"
                  color={colorMode === "dark" ? "white" : "#385A64"}
                >
                  Dark mode
                </Text>
                <Switch
                  colorScheme="teal"
                  isChecked={colorMode === "dark"}
                  onChange={toggleColorMode}
                />
              </Flex>
              <Box mt="4">
                <Menu>
                  <MenuButton as={Avatar} bg="red.500">
                    <AiOutlineUser fontSize="1.5rem" />
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      <Flex align="center" justify="flex-end" width="auto">
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
            Email
          </Button>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline"
          >
            Call us
          </Button>
        </Stack>
        <IconButton
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          variant="ghost"
          aria-label="Toggle Dark Mode"
          fontSize="20px"
          color={colorMode === "dark" ? "white" : "#385A64"} // Adjust icon color
          marginRight="4"
          onClick={toggleColorMode}
        />
        <Box textAlign="right">
          <Avatar src="https://bit.ly/sage-adebayo" />
          <Box ml="3">
            <Text fontWeight="bold">
              Rajdeep Biswas
              <Badge ml="1" colorScheme="green">
                New
              </Badge>
            </Text>
            <Text fontSize="sm">UI Engineer</Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
