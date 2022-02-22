import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Text, Stack } from '@chakra-ui/react';
import { Button, Collapse } from '@chakra-ui/react';
import { PhoneIcon, DownloadIcon } from '@chakra-ui/icons';
import { ImSphere, ImCart } from 'react-icons/im';
import { motion } from 'framer-motion';


const Main = () => {
  const [show, setShow] = React.useState(true)
  const MotionBox = motion(Box);

  const [state] = useState({
    website: 'www.ivistamed.com',
    phone: 'Phone : (437) 421-7746',
    address: `Address : 1595 16th Avenue, Suite 301 Richmond Hill, ON L4B 3N9`,
  });
  
  const handleToggle = () => setShow(!show)
  return (
    <>
      <Flex align="center" justify="center">
        <Stack direction="row" spacing={5} m="2">
          <MotionBox whileHover={{ scale: 1.1 }}>
            <Button
              _hover={{
                background: '#008283',
                color: '#CBD5E0',
                bordercolor: '#008283',
              }}
              _focus={{
                background: '#EDF2F7',
              }}
              boxShadow="md"
              rightIcon={<ImSphere size="1.25em" bordercolor="teal" />}
              colorScheme="teal"
              variant="outline"
              size="md"
              height="48px"
              width="200px"
              border="2px"
              mt="0"
              borderRadius="20"
              onClick={() => window.open('https://www.ivistamed.com', '_blank')}
              fontSize="22px"
            >
              website
            </Button>
          </MotionBox>
        </Stack>
      </Flex>

      <Flex align="center" justify="center">
        <Stack direction="row" spacing={1} m="3">
          <MotionBox whileHover={{ scale: 1.1 }}>
            <Button
              _hover={{
                background: '#008283',
                color: '#CBD5E0',
              }}
              _focus={{
                background: '#EDF2F7',
              }}
              boxShadow="md"
              leftIcon={<PhoneIcon boxsize="1.25em" />}
              color="#008283"
              colorScheme="#teal"
              variant="outline"
              size="md"
              height="48px"
              width="200px"
              border="2px"
              bordercolor="#008283"
              onClick={handleToggle}
              m="0"
              fontSize="20px"
              borderRadius="20"
            >
              Contact Us
            </Button>
          </MotionBox>
        </Stack>
      </Flex>
      <Flex align="center" justify="center">
        <Collapse in={show}>
          <Box p={[5, 2]} color="white" mt="1" bg="teal.500" rounded="md" shadow="md" mb="0">
            <Text fontSize="1.25em" textAlign="center">
              {state.phone}
            </Text>
            <Text textAlign={['left', 'center']} fontSize="1.25em">
              {state.address}
            </Text>
          </Box>
        </Collapse>
      </Flex>
      <Flex align="center" justify="center">
        <Stack direction="row" spacing={4} m="3">
          <MotionBox whileHover={{ scale: 1.1 }}>
            <Button
              _hover={{
                background: '#008283',
                color: '#CBD5E0',
              }}
              _focus={{
                background: '#EDF2F7',
              }}
              boxShadow="md"
              rightIcon={<DownloadIcon boxsize="1.25em" />}
              colorScheme="teal"
              variant="outline"
              size="md"
              height="48px"
              width="200px"
              border="2px"
              bordercolor="#008283"
              mb="0"
              borderRadius="20"
              fontSize="20px"
            >
              Cotolloge
            </Button>
          </MotionBox>
        </Stack>
      </Flex>
      <Flex align="center" justify="center">
        <Stack direction="row" spacing={4} m="3">
          <MotionBox whileHover={{ scale: 1.1 }}>
            <Button
              _hover={{
                background: '#008283',
                color: '#CBD5E0',
              }}
              _focus={{
                background: '#EDF2F7',
              }}
              boxShadow="md"
              leftIcon={<ImCart boxsize="1.25em" />}
              colorScheme="teal"
              variant="outline"
              size="md"
              height="48px"
              width="200px"
              border="2px"
              bordercolor="#008283"
              mb="0"
              borderRadius="20"
              fontSize="20px"
            >
              Online Shopping
            </Button>
          </MotionBox>
        </Stack>
      </Flex>
    </>
  );
};
export default Main;
