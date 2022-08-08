import { Box, Divider, Flex, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import Header from './layout/Header/Header'
import { useForm } from "react-hook-form"
import Info from './components/Form/Info'
import Atrubutes from './components/Form/Atrubutes'

export interface regirterUser {
  name: string
  description: string
}
function App() {
  const { register, handleSubmit } = useForm<regirterUser>()

  const onSubmit = (data: regirterUser) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header />
      <Flex padding={5} gap={6} flexDir="column">
        <Info register={register} />
        <Divider opacity={1}/>
        <Atrubutes register={register} />
      </Flex>
    </form>
  )
}

export default App
