import { Button } from "@chakra-ui/button";
import { ChevronDownIcon, ChevronUpIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Fitness_hub_bg_less.png";
import { AuthContext } from "../../Context/loginContext";

const Navbar = () => {
  const [state, setState] = React.useState(<ChevronDownIcon />);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loginauth, handleLogin } = useContext(AuthContext);

  const handlein = (e) => {
    setState(<ChevronUpIcon />);
  };
  const handleout = () => {
    setState(<ChevronDownIcon />);
  };

 console.log(loginauth);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      borderBottom="1px solid #D3D3D3"
      maxWidth="98%"
      margin="auto"
      paddingY="0.8%"
    >
      <Box display="flex" alignItems="center">
        <Box maxWidth={{ base: "8%", md: "12", lg: "15%" }}>
          <Image src={logo} />
        </Box>
        <Box>
          <Link to="/">
            <Text
              fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}
              fontWeight="700"
            >
              MyFitness Hub
            </Text>
          </Link>
        </Box>
      </Box>
      <Box
        width={{ lg: "90%", xl: "70%" }}
        display={{ base: "none", lg: "flex" }}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Link to="/Home">
          <Text fontSize="xl" fontWeight="600">
            Home
          </Text>
        </Link>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              cursor="pointer"
              onMouseEnter={handlein}
              onMouseLeave={handleout}
            > 
              <Text fontSize="xl" fontWeight="600">
                Products
              </Text>
              {state}
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody
              display="flex"
              flexDirection="column"
              gap={5}
              boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              onMouseEnter={handlein}
              onMouseLeave={handleout}
            >
              <Link>
                <Box display="flex" alignItems="center" gap={1}>
                  <Box maxWidth="20%">
                    <Link to="/">
                      {" "}
                      <Image src={logo} />
                    </Link>
                  </Box>
                  <Box textAlign="left">
                    <Link to="/">
                      <Text fontSize="xl" fontWeight="600">
                        MyFitness Hub
                      </Text>
                    </Link>
                    <Text fontSize="md">For Individuals</Text>
                  </Box>
                </Box>
              </Link>
              {/*<Link>
                 <Box display="flex" alignItems="center" gap={1}>
                  <Box maxWidth="20%">
                    <Image src={logo} />
                  </Box>
                  <Box textAlign="left">
                    <Link to="/productPro">
                      <Text fontSize="xl" fontWeight="600">
                        Fitnesshub Pro
                      </Text>
                    </Link>
                    <Text fontSize="md">For Healthcare Professionals</Text>
                  </Box>
                </Box>
               </Link>*/}
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Link to="/support">
          <Text fontSize="xl" fontWeight="600">
            Support
          </Text>
        </Link>
        <Link to="/blog">
          <Text fontSize="xl" fontWeight="600">
            Blog
          </Text>
        </Link>
        <Link to="/forms">
          <Text fontSize="xl" fontWeight="600">
            Forums
          </Text>
        </Link>
        <Link to="/about">
          <Text fontSize="xl" fontWeight="600">
            About
          </Text>
        </Link>
        <Link to="/login">
        <Button bg="none" border="1px solid">
          {loginauth ? "LOGOUT" : "LOGIN"}
        </Button>
        </Link>
      </Box>
      <Box display={{ base: "block", lg: "none" }}>
        <HamburgerIcon marginLeft="-100%" onClick={onOpen} />
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              <Box display="flex" alignItems="center">
                <Box maxWidth={{ base: "8%", md: "12", lg: "15%" }}>
                  <Image src={logo} />
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}
                    fontWeight="700"
                  >
                    Fitnesshub
                  </Text>
                </Box>
              </Box>
            </DrawerHeader>
            <DrawerBody display="flex" flexDirection="column" gap={3}>
              <Box>
                <Accordion defaultIndex={[0]} allowMultiple bg="none">
                  <AccordionItem bg="none">
                    <h2>
                      <AccordionButton padding="0" bg="none">
                        <Text
                          as="span"
                          textAlign="left"
                          flex={1}
                          fontSize={{ base: "md", md: "md" }}
                          fontWeight="600"
                        >
                          Products
                        </Text>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Link>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Box maxWidth="20%">
                            <Image src={logo} />
                          </Box>
                          <Box textAlign="left">
                            <Text
                              fontSize={{ base: "sm", md: "md" }}
                              fontWeight="600"
                            >
                              Fitnesshub
                            </Text>
                            <Text fontSize={{ base: "sm", md: "md" }}>
                              For Individuals
                            </Text>
                          </Box>
                        </Box>
                      </Link>
                      <Link>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Box maxWidth="20%">
                            <Image src={logo} />
                          </Box>
                          <Box textAlign="left">
                            <Text
                              fontSize={{ base: "sm", md: "md" }}
                              fontWeight="600"
                            >
                              Fitnesshub Pro  
                              </Text>
                            <Text fontSize={{ base: "sm", md: "md" }}>
                              For Healthcare Professionals
                            </Text>
                          </Box>
                        </Box>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
              <Box>
                <Link to="/blog">
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600">
                    Blog
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link to="/forms">
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600">
                    Forums
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link to="/about">
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600">
                    About
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link>
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="600">
                    Support
                  </Text>
                </Link>
              </Box>

              <Button bg="color:green" border="2px solid" maxWidth="35%">
                <Text fontSize={{ base: "md", md: "lg" }}>LOGIN</Text>
              </Button>
              
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
