import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const MotionBox = motion(Box);

  return (
    <>
      <Flex align='center'>
        <MotionBox
          whileTap={{
            scale: [1, 0.7, 1],
          }}
        >
          <HStack
            fontSize="2.5em"
            color="#4A5568"
            pl={[2, 4]}
            mt={[4, 2]}
            ml={[2, 4]}
            pb={[2, 4]}
            _hover={{
              color: '#2B6CB0',
              bordercolor: '#ED8936',
            }}
          >
            <a href="https://www.facebook.com/ivistamed" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </HStack>
        </MotionBox>
        <MotionBox
         whileTap={{
            scale: [1, 0.7, 1],
          }}
        >
          <HStack
            fontSize="2.5em"
            color="#4A5568"
            pb={[2, 4]}
            mt={[4, 2]}
            ml={[2, 4]}
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
          whileTap={{
            scale: [1, 0.7, 1],
          }}
        >
          <HStack
            fontSize="2.5em"
            color="#4A5568"
            pb={[2, 4]}
            mt={[4, 2]}
            ml={[2, 4]}
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
    </>
  );
};
export default Footer;
