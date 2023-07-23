import {TextInput, Tag, FluidForm, Button, TextArea, Form} from '@carbon/react'
import {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'

type Inputs = {
  title?: string
  description?: string
}

export default function HomeForm(props: {
  slug: string,
  fetch: () => Promise<Inputs>,
  onSubmit: (data: Inputs) => Promise<void>,
  onCancel: () => void,
}) {
  const {
    register: _register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<Inputs>()

  const [initialData, setInitialData] = useState<Inputs | undefined>(undefined)

  const register = (name: keyof Inputs) => ({
    ..._register(name),
    id: name,
  })

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData])

  useEffect(() => {
    props.fetch()
      .then(data => {
        setInitialData(data)
      })

  }, [])

  return <>
    <p>Path: <Tag>{props.slug}</Tag></p>

    <h2>Edit content</h2>
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