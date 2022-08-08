import { Box, Heading, Icon, Input, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { UseFormRegister } from "react-hook-form"
import { regirterUser } from "src/App"
import CustomTable from "../Table"

interface Props {
  register: UseFormRegister<regirterUser>
}

export default function Atrubutes({ register }: Props) {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="semi-bold">Atributos</Text>
      <CustomTable />
    </Box>
  )
}
