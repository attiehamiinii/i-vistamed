/*eslint-disable*/
import React,{useState} from "react";
import './main.css'
import { Box,Flex,Image } from "@chakra-ui/react"
import Logo from '../assests/home/vistalogo.png'
import { Grid, GridItem,Text,Stack } from '@chakra-ui/react'
import { Button,ScaleFade,useDisclosure } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
const Main = () => {
    const { isOpen, onToggle } = useDisclosure()
    const [state,setState] = useState({
        website : 'www.ivistamed.com',
        phone : 'Phone : 437-421-7746',
        address: `Address : 1595 16th Avenue, Suite 301 Richmond Hill, ON L4B 3N9`
    }) ;
// const handleChange= () => {
//     if (state.isShow ===true){
//         setState({ phone: 'Phone : 437-421-7746' , address:`Address : 1595 16th Avenue, Suite 301

//         Richmond Hill, ON L4B 3N9`})
//     }else {
//         setState({isShow:true})
//     }
// }


    <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
></Grid>
    return (
     
        <Box   maxW="960px" mx="auto" border='2px' borderColor='gray.200'
       borderRadius='lg' overflow='hidden'
        boxShadow='md'  rounded='md' bg='white' mt='20' 
        >
            <Text  fontSize='2em' textAlign={[ 'left', 'center' ]} mt='5'  fontWeight='bold' 
            as='h1' color='#008283'>
                 
                 Welcome to i-VISTAMED!
</Text>


<Box  border='1px' borderColor='gray.200' p='2' m='8'  borderRadius='lg' boxShadow='inner'>
<Text  fontSize='md' textAlign={[ 'left', 'center' ]} mt='5'  fontWeight='bold' 
            as='h1' color='gray.500'  >               
We are here to support you & your patients.
</Text>
<Text color='gray.500' p='2'>
Confidently rely on us for your everyday Dental consumables and PPE requirements. At i-VISTAMED, a wide range of best quality products are at your out-reach at an affordable price. 

</Text>
    
</Box>
               <GridItem colSpan={2} mt='5' pt='0' align="center" >
             <Image w="50%"     src={Logo} alt='Logo i-vistaMed' />
             </GridItem>
<Flex align="center" justify="center">
<Stack direction='row' spacing={4} m='5'>
<Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'
 size='md'
 height='48px'
 width='200px'
 border='2px'
 borderColor='#008283'
 onClick={onToggle}
>
    Contact Us 
  </Button>

  <ScaleFade  in={isOpen}>
        <Box
          p='20px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
       
        >
            <Text >
            {state.phone}
            </Text>
     <Text textAlign={[ 'left', 'center' ]} >
     {state.address}
     </Text>
        
        </Box>
      </ScaleFade>


  
</Stack>
</Flex>


</Box>

    )
}
export default Main;