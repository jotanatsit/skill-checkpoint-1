import { Flex, Image, Text } from '@chakra-ui/react'
import "../componentsStyle/Footer.css"
import squircle from '/icons/footer-section/squircle.png'
import instagram from '/icons/footer-section/instagram.png'
import telegram from '/icons/footer-section/telegram.png'

export function Footer() {
   return (
      <Flex bg="#F1F1F1" h="18.89vh" w="100%" justify="space-around" align="center" mt="8.89vh">
         <Flex w="17vw" justify="space-between">
            <Image src={squircle} alt="mail" boxSize="2.67vh" />
            <Text className='email common-font-style'>tanatsit1500@gmail.com</Text>
         </Flex>
         <Text className='copy-right common-font-style'>© Copyright 2023 | tanatsit1500</Text>
         <Flex w="4.167vw" justify="space-between" position="relative" left="-5.56vw">
            <Image src={instagram} alt="instagram" boxSize="2.67vh" />
            <Image src={telegram} alt="mail" boxSize="2.67vh" />
         </Flex>
      </Flex>
   )
}