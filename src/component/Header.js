/*eslint-disable*/
import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import Logo from '../assests/home/vistalogo.png';
import {  GridItem, Text } from '@chakra-ui/react';
import Main from './Main';
import vistabg from '../assests/home/bg.png';
import { motion } from 'framer-motion';
import Footer from './Footer';
import backframe from   '../assests/home/backcolore.jpg'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const Header = () => {
  const MotionText = motion(Text);
  const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })
  
  return (
    <Flex align="center" justify="center" zIndex="1">
      <Box
        maxW="740px"
        mx="auto"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="2xl"
        rounded="md"
        bg="#F7FAFC"
        zIndex="1"
        position="relative"
        mt='5'
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

        <Box 
        border="2px"  
        borderColor='#BCBEC0'
        p="2" 
        m="5" 
        borderRadius="xl"
         bgImage={backframe} 
         bgRepeat='no-repeat' 
         bgSize='cover' 
         opacity='0.9'>
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
        <Main/>
        <Footer/> 
      </Box>
    </Flex>
  );
};
export default Header;
