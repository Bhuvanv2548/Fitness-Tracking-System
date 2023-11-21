import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../Components/Dashboard/Sidebar";

const Help = () => {
  return (
    <Box>
      <Heading>Help</Heading>

      <Flex>
        <Sidebar/>
        <Box bg="rgb(255,252,246)" border="2px solid" w="100%">
          {/* kaaam isme krna hai  Box ke andar*/}






        </Box>
      </Flex>
    </Box>
  );
};

export default Help;
