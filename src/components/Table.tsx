import { TableContainer, Th, Thead, Tr, Tbody, Input, Td, Select, Text, Table } from '@chakra-ui/react'

export default function CustomTable() {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Tipo</Th>
            <Th>Description</Th>
            <Th>Constraints</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Input placeholder="ID" border="none" />
            </Td>
            <Td>
              <Select defaultValue="empty">
                <option value='empty'></option>
                <option value='option1'>DECIMAL</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </Td>
            <Td>
              <Select >
                <option value='One To One'>One To One</option>
                <option value='One To Two'>One To Two</option>
                <option value='One To Three'>One To Three</option>
              </Select>
            </Td>
            <Td>
              <Input defaultValue="Relación xyz" border="none" />
            </Td>
            <Td>
              <Input>
              </Input>
            </Td>
            <Td>
              <Text>icon</Text>
            </Td>
          </Tr>


          <Tr>
            <Td>
              <Input placeholder="Celular" border="none" />
            </Td>
            <Td>
              <Select defaultValue="empty">
                <option value='empty'></option>
                <option value='option1'>CHAR</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </Td>
            <Td>
              <Select >
                <option value='One To One'>One To One</option>
                <option value='One To Two'>One To Two</option>
                <option value='One To Three'>One To Three</option>
              </Select>
            </Td>
            <Td>
              <Input defaultValue="Relación xyz" border="none" />
            </Td>
            <Td>
              <Input>
              </Input>
            </Td>
            <Td>
              <Text>icon</Text>
            </Td>
          </Tr>


        </Tbody>
      </Table>
    </TableContainer>
  )
}
