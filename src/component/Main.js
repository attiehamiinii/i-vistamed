import React, { useState } from 'react';
import './main.css';
import { Box, Flex, Image } from '@chakra-ui/react';
import Logo from '../assests/home/vistalogo.png';
import { Grid, GridItem, Text, Stack } from '@chakra-ui/react';
import { Button, Collapse, useDisclosure, HStack } from '@chakra-ui/react';
import { PhoneIcon, DownloadIcon } from '@chakra-ui/icons';
import { ImSphere, ImCart } from 'react-icons/im';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import vistabg from '../assests/home/bg.png';
import { motion } from 'framer-motion';
const Main = () => {
  const { isOpen, onToggle } = useDisclosure();
  const MotionText = motion(Text);
  const MotionBox = motion(Box);

  const [state] = useState({
    website: 'www.ivistamed.com',
    phone: 'Phone : (437) 421-7746',
    address: `Address : 1595 16th Avenue, Suite 301 Richmond Hill, ON L4B 3N9`,
  });
  const handleChange = e => {
    e.preventDefault();
    onToggle();
  };

  <Grid h="200px" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}></Grid>;
  return (
    <Flex align="center" justify="center" m="10" p="0" zIndex="1">
      <Box
        maxW="740px"
        mx="auto"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        rounded="md"
        bg="#F7FAFC"
        zIndex="1"
        position="relative"
      >
        <GridItem
          position="absolute"
          pt="0"
          top="1"
          width="100%"
          zIndex="-1"
          opacity="0.5"
          mx="auto"
          ml="150"
        >
          <Image w="80%" src={vistabg} alt="back i-vistaMed" />
        </GridItem>

        <Box border="1px" borderColor="#F7FAFC" p="2" m="5" borderRadius="lg" bg="#008283">
          <Text
            fontFamily="PT Serif"
            fontSize="2em"
            textAlign={['left', 'center']}
            mt="5"
            fontWeight="bold"
            as="h1"
            color="#F7FAFC"
          >
            Welcome to i-VISTAMED!
          </Text>

          <Text
            fontFamily="Source Sans Pro"
            fontSize="1em"
            textAlign={['left', 'center']}
            mt="3"
            fontWeight="bold"
            as="h1"
            color="#FFFAF0"
          >
            We are here to support you & your patients.
          </Text>
          <Text p="2" fontFamily="Roboto Serif" textAlign={['left', 'center']} color="#FFFAF0">
            Confidently rely on us for your everyday Dental consumables and PPE requirements. At
            i-VISTAMED, a wide range of best quality products are at your out-reach at an affordable
            price.
          </Text>
        </Box>
        <MotionText

        animate={{
          scale: [0, 1.2, 1, 1],
        }}
        transition={{
          duration: 1.5,
          ease: 'easeInOut',
          // times: [0, 0.2, 0.5, 0.8, 1],
          // repeat: Infinity,
          // repeatType: "loop",
          // repeatDelay: 1
        }}
        >
          <GridItem colSpan={2} mt="5" pt="0" align="center">
            <Image w="80%" src={Logo} alt="Logo i-vistaMed" />
          </GridItem>
        </MotionText>

        <Flex align="center" justify="center">
          <Stack direction="row" spacing={4} m="3">
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
                onClick={handleChange}
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
          <Collapse in={isOpen}>
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

        <Flex align="left" justify="left">
          <MotionBox
            whileHover={{
              rotate: [0, 0, 360, 360, 0],
            }}
          >
            <HStack
              fontSize="2em"
              color="#4A5568"
              pl="5"
              m="2"
              pb="5"
              _hover={{
                color: '#2B6CB0',
                bordercolor: '#ED8936',
              }}
            >
              <a
                href="https://www.facebook.com/ivistamed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </HStack>
          </MotionBox>
          <MotionBox
            whileHover={{
              rotate: [0, 0, 360, 360, 0],
            }}
          >
            <HStack
              fontSize="2em"
              color="#4A5568"
              pb="5"
              m="2"
              _hover={{
                color: '#B83280',
              }}
            >
              <a
                href="https://www.instagram.com/ivistamed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </HStack>
          </MotionBox>
          <MotionBox
            whileHover={{
              rotate: [0, 0, 360, 360, 0],
            }}
          >
            <HStack
              fontSize="2em"
              color="#4A5568"
              pb="5"
              m="2"
              _hover={{
                color: '#2B6CB0',
                bordercolor: '#ED8936',
              }}
            >
              <a
                href="https://www.linkedin.com/company/intelligent-vista-med"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </HStack>
          </MotionBox>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Main;
