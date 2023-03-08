import { Image, SimpleGrid, Flex, Text } from '@chakra-ui/react'
import "../componentsStyle/Portfolio.css"
import arrowRight from '/icons/portfolio-section/arrow-right.png'
import port1 from "/icons/portfolio-section/port-1.png"
import port2 from "/icons/portfolio-section/port-2.png"
import port3 from "/icons/portfolio-section/port-3.png"
import port4 from "/icons/portfolio-section/port-4.png"
import port5 from "/icons/portfolio-section/port-5.png"
import port6 from "/icons/portfolio-section/port-6.png"

export function Portfolio() {
   const portImage = [port1, port2, port3, port4, port5, port6]
   return (
      <>
         <Flex mt="13.89vh" ml="10.42vw" w="73.82vw" align="center" justify="space-between" >
            <Text className='portfolio-heading common-font-style'>Portfolio</Text>
            <Flex w="8.33vw" justify="space-between">
               <Text className='portfolio-see-more common-font-style'>See More</Text>
               <Image src={arrowRight} />
            </Flex>
         </Flex>
         <Flex justify="center" mt="64px">
            <SimpleGrid columns={3} spacing="24px" justifyContent="center">
               {portImage.map((item, index) => {
                  return (
                     <Image key={index} src={item} />
                  )
               })}
            </SimpleGrid>
         </Flex>
      </>
   )

}