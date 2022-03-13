/*eslint-disable*/
import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import Logo from '../assests/home/vistalogo.png';
import { GridItem, Text } from '@chakra-ui/react';
import Main from './Main';
import vistabg from '../assests/home/bg.png';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Header = () => {
  const MotionText = motion(Text);

  return (
    <Flex align="center" justify="center" zIndex="1">
      <Box
        w={[350, 500, 750, 950, 1800]}
        height="auto"
        mx="auto"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        rounded="md"
        bg="#F7FAFC"
        zIndex="1"
        position="relative"
        mt={[2, 4, 6, 8]}
      >
        <GridItem position="absolute" top={[2, 4, 6, 8]} zIndex="-1" opacity="0.5" right="0">
          <Image w={[300, 400, 500, 750]} src={vistabg} alt="back i-vistaMed" />
        </GridItem>

        <Box
          bgColor="#008283"
          border="2px"
          borderColor="#BCBEC0"
          p={[2, 4]}
          m={[2, 4]}
          borderRadius="xl"
        >
          <Text
            fontFamily="PT Serif"
            fontSize={{ base: '20px', md: '30px', lg: '50px' }}
            textAlign={['center']}
            mt={[1, 2, 0]}
            p={[1, 2]}
            fontWeight="bold"
            as="h1"
            color="#F7FAFC"
          >
            Welcome to i-VISTAMED!
          </Text>

          <Text
            fontFamily="Roboto Serif "
            fontSize={{ base: '12px', md: '20px', lg: '25px' }}
            textAlign={['center']}
            mt={[1, 2 ,0]}
            as="h1"
            color="#F7FAF5"
            fontWeight="semibold"
            wordBreak="keep-all"
          >
            We are here to support you & your patients
          </Text>
          <Text
            p={[1, 2]}
            mt={[1, 2, 0]}
            fontFamily="Roboto Serif"
            textAlign={['center']}
            color="#F7FAFC"
            fontSize={{ base: '14px', md: '20px', lg: '20px' }}
            wordBreak="keep-all"
          >
            Confidently rely on us for your everyday Dental consumables and PPE requirements At
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
          <GridItem colSpan={2} mt={[2, 4, 6]} pt="0" align="center">
            <Image src={Logo} alt="Logo i-vistaMed" />
          </GridItem>
        </MotionText>
        <Main />
        <Footer />
      </Box>
    </Flex>
  );
};
export default Header;
