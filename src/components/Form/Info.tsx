import { Flex, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";
import { regirterUser } from "src/App";


interface Props {
  register: UseFormRegister<regirterUser>
}

export default function Info({ register }: Props) {
  return (
    <Flex width="100%" gap={10}>
      <FormControl>
        <FormLabel>Nombre</FormLabel>
        <Input type='text' placeholder='Person' {...register("name", {
          required: "Campo obligatorio"
        })} />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea placeholder='Tabla para x y z' resize="none" {...register("description", {
          required: "Campo obligatorio"
        })} />
      </FormControl>
    </Flex>
  )
}
