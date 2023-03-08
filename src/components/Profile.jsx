import { Flex, Image, Box, Button, Text } from '@chakra-ui/react'
import "../componentsStyle/Profile.css"
import "../icons/profile-section/facebook.svg"
import "../icons/profile-section/twitter.svg"
import "../icons/profile-section/instagram.svg"
import "../icons/profile-section/telegram.svg"


export function Profile() {
   const icons = ["facebook", "twitter", "instagram", "telegram"]
   return (
      <Flex>
         <Flex
            direction="column"
            justify="space-between"
            width='50%'
            height="56.11vh"
            mt="9.89vh"
            ml="12.78vw">
            <Box>
               <Text className='greeting common-font-style'>Hi!</Text>
               <Text className='self-introduce common-font-style'>
                  I'm Tanatsit B.<br />
                  a fullstack developer
               </Text>
            </Box>
            <Text className='summary common-font-style'>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
               Ut consequuntur soluta, dicta nesciunt unde dignissimos.<br />
               Id nesciunt excepturi veritatis cumque?
            </Text>
            <Flex className='social-media'>
               <Text className='follow-me common-font-style'>Follow me</Text>
               <Flex justify="space-between" w="16.67vw">
                  {icons.map((i, index) => {
                     return (
                        <Image key={index} src={`../src/icons/profile-section/${i}.svg`} alt={i} borderRadius="100%" _hover={{ boxShadow: "outline", }} />
                     )
                  })}
               </Flex>
            </Flex>
            <Flex w="335px" justify="space-between">
               <Button className='btn-send-request common-font-style'
                  bg="#FF2950"
                  w="10.49vw"
                  h="6.11vh"
                  p="1.56vh"
                  borderRadius="10px">
                  Send Request
               </Button>
               <Button className='btn-download-cv common-font-style'
                  bg="white"
                  w="10.625vw"
                  h="6.11vh"
                  p="1.56vh"
                  borderRadius="10px"
                  border="2px solid #FF9B70" >
                  Download CV
               </Button>
            </Flex>
         </Flex>
         <Flex justify="center" alignItems="center" w="50%">
            <Image src="https://dummyimage.com/400x400/636263/ffffff.png" alt="dummy-image" />
         </Flex>
      </Flex >
   )
}