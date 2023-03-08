import { Image, SimpleGrid, Flex, Text } from '@chakra-ui/react'
import "../componentsStyle/Portfolio.css"
import "../icons/portfolio-section/arrow-right.svg"
import "../icons/portfolio-section/port-1.svg"
import "../icons/portfolio-section/port-2.svg"
import "../icons/portfolio-section/port-3.svg"
import "../icons/portfolio-section/port-4.svg"
import "../icons/portfolio-section/port-5.svg"
import "../icons/portfolio-section/port-6.svg"

export function Portfolio() {
   const portImage = ["port-1", "port-2", "port-3", "port-4", "port-5", "port-6"]
   return (
      <>
         <Flex mt="13.89vh" ml="10.42vw" w="73.82vw" align="center" justify="space-between" >
            <Text className='portfolio-heading common-font-style'>Portfolio</Text>
            <Flex w="8.33vw" justify="space-between">
               <Text className='portfolio-see-more common-font-style'>See More</Text>
               <Image src='../src/icons/portfolio-section/arrow-right.svg' />
            </Flex>
         </Flex>
         <Flex justify="center" mt="64px">
            <SimpleGrid columns={3} spacing="24px" justifyContent="center">
               {portImage.map((item, index) => {
                  return (
                     <Image key={index} src={`../src/icons/portfolio-section/${item}.svg`} />
                  )
               })}
            </SimpleGrid>
         </Flex>
      </>
   )

}