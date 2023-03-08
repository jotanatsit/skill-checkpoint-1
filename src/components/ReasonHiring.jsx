import { Flex, SimpleGrid, Card, CardHeader, CardBody, Image, Text } from "@chakra-ui/react";
import "../componentsStyle/ReasonHiring.css"

export function ReasonHiring() {
   const icons = ["communicate", "professional", "collaboration", "client"]
   const cardHeader = ["Communicative", "Professional", "Collaborative", "Client’s Favourite"]

   return (
      <Flex direction="column" align="center" mt="9.67vh" >
         <Text className="reason-title common-font-style">Why Hire Me?</Text>
         <SimpleGrid className="reason-hiring-content" columns={4} spacing={10} mt="11.11vh">
            {cardHeader.map((item, index) => {
               return (
                  <Card key={index} borderRadius="50px" >
                     <CardHeader display="flex" flexDirection="column" alignItems="center">
                        <Image src={`../src/icons/reason-section/${icons[index]}.svg`} borderRadius="100%" boxSize="10.89vh" />
                        <Text className="card-heading-text common-font-style">{item}</Text>
                     </CardHeader>
                     <CardBody>
                        <Text className="card-body-text common-font-style" textAlign="center">
                           Amet minim mollit non<br />
                           deserunt ullamco est sit<br />
                           aliqua dolor do amet sint.
                        </Text>
                     </CardBody>
                  </Card>
               )
            })}
         </SimpleGrid>
      </Flex >
   )
}