import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Text, Stack } from '@chakra-ui/react';
import { Button, Collapse, IconButton } from '@chakra-ui/react';
import resume from '../assests/home/resume.pdf';
import { PhoneIcon, DownloadIcon } from '@chakra-ui/icons';
import { ImSphere, ImCart, ImPhone, ImLocation2 } from 'react-icons/im';
import { motion } from 'framer-motion';

const Main = () => {
  const [show, setShow] = React.useState(true);
  const MotionBox = motion(Box);

  const [state] = useState({
    website: 'www.ivistamed.com',
    phone: '(437) 421-7746',
    address: `1595 16th Avenue, Suite 301 Richmond Hill, ON L4B 3N9`,
  });

  const handleToggle = () => setShow(!show);
  return (
    <>
      <Flex align="center" justify="center">
        <Stack direction="row" spacing={5} m={[2, 4]}>
          <MotionBox whileTap={{ scale: 1.1 }}>
            <Button
              _hover={{
                background: '#008283',
                color: '#ff9900',
                borderColor: '#ff9900',
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
              borderRadius="30"
              onClick={() => window.open('https://www.ivistamed.com', '_blank')}
              fontSize="22px"
            >
              website
            </Button>
          </MotionBox>
        </Stack>
      </Flex>

      <Flex align="center" justify="center">
        <Stack direction="row" spacing={1} m={[2, 3]}>
          <MotionBox whileTap={{ scale: 1.1 }}>
            <Button
              _hover={{
                background: '#008283',
                color: '#ff9900',
                borderColor: '#ff9900',
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
              borderRadius="30"
            >
              Contact Us
            </Button>
          </MotionBox>
        </Stack>
      </Flex>
      <Flex align="center" justify="center">
        <Collapse in={show}>
          <Box
            p={[2, 4, 6]}
            color="white"
            m={[1.5]}
            bg="teal.500"
            rounded="md"
            shadow="md"
            mb="0"
            borderRadius="20"
          >
            <Text fontSize="1.25em" textAlign="center" mb="1.5" fontWeight="semibold">
              <IconButton colorScheme="teal" size="xl" p="2" icon={<ImPhone />} />
              {state.phone}
            </Text>
            <Text fontWeight="semibold" textAlign={['center']} fontSize="1.25em">
              <IconButton p="2" colorScheme="teal" size="xl" icon={<ImLocation2 />} />
              {state.address}
            </Text>
          </Box>
        </Collapse>
      </Flex>
      <Flex align="center" justify="center">
        <Stack direction="row" spacing={4} m={[2, 3]}>
          <MotionBox whileTap={{ scale: 1.1 }}>
            <a href={resume} download="i-Vistamed.pdf">
              <Button
                _hover={{
                  background: '#008283',
                  color: '#ff9900',
                  borderColor: '#ff9900',
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
                borderRadius="30"
                fontSize="20px"
                // borderColor='#ff9900'
              >
                Cotolloge
              </Button>
            </a>
          </MotionBox>
        </Stack>
      </Flex>
      <Flex align="center" justify="center">
        <Stack direction="row" spacing={4} m={[2, 3]}>
          <MotionBox whileTap={{ scale: 1.1 }}>
            <Button
              _hover={{
                background: '#008283',
                color: '#ff9900',
                borderColor: '#ff9900',
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
              borderRadius="30"
              fontSize="20px"
              onClick={() => window.open('https://www.ivistamed.com/our-products/', '_blank')}
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
