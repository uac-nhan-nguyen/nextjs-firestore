import { TextInput, FluidForm, Button, TextArea, Form } from '@carbon/react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  title: string
  description: string
}

export default function HomeForm(props: {
  data: Inputs,
  onSubmit: (data: Inputs) => Promise<void>,
  onCancel: () => void,
}) {
  const {
    register: _register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>()

  const register = (name: keyof Inputs) => ({
    ..._register(name),
    id: name,
  })

  useEffect(() => {
  }, [props.data])

  return <>
    <Form onSubmit={handleSubmit((data) => {
      props.onSubmit(data);
    })}>
      <TextInput labelText='Title' {...register('title')} />
      <TextArea labelText='Description' {...register('description')} />
      <Button type='submit'>Save</Button>
      <Button kind='secondary' onClick={props.onCancel}>Cancel</Button>
    </Form>
  </>
} 