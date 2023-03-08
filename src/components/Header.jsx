import { Flex, Text } from '@chakra-ui/react'
import "../componentsStyle/Header.css"
export function Header() {
   return (
      <Flex bg="#FF2950" color="white" h="16.5vh" pl="11.95vw" align="center">
         <Text className="header-title common-font-style">My profile</Text>
      </Flex>
   )
}