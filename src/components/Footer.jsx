import { Flex, Image, Text } from '@chakra-ui/react'
import "../componentsStyle/Footer.css"


export function Footer() {
   return (
      <Flex bg="#F1F1F1" h="18.89vh" w="100%" justify="space-around" align="center" mt="8.89vh">
         <Flex w="17vw" justify="space-between">
            <Image src="../src/icons/footer-section/squircle.png" alt="mail" boxSize="2.67vh" />
            <Text className='email common-font-style'>tanatsit1500@gmail.com</Text>
         </Flex>
         <Text className='copy-right common-font-style'>© Copyright 2023 | tanatsit1500</Text>
         <Flex w="4.167vw" justify="space-between" position="relative" left="-5.56vw">
            <Image src="../src/icons/footer-section/instagram.png" alt="instagram" boxSize="2.67vh" />
            <Image src="../src/icons/footer-section/telegram.png" alt="mail" boxSize="2.67vh" />
         </Flex>
      </Flex>
   )
}