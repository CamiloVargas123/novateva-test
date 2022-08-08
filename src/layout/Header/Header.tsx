import { Box, Button, Flex, Heading } from '@chakra-ui/react'

export default function Header() {
  return (
   <Flex justifyContent="space-between" width="100%" paddingInline={10} paddingY={4} borderBottom="solid 1px" borderColor="gray">
    <Heading>Nueva tabla</Heading>
    <Button type="submit" colorScheme='blue'>Guardar</Button>
   </Flex>
  )
}
