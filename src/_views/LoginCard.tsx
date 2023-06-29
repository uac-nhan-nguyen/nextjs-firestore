'use client'

import React from "react";
import {useRouter} from 'next/navigation'
import {signIn} from "@/hooks/useUser";
import {Button, FluidForm, Form, TextInput} from "@carbon/react";
import {useForm} from "react-hook-form";


export const LoginCard = () => {
  const form = useForm<{
    email: string,
    password: string,
  }>()
  return <>
    <FluidForm className={''}
               onSubmit={form.handleSubmit(async (data, event) => {
                 console.log(data);
                 const [user, error] = await signIn(data.email, data.password)
                 console.log({user,error})
               })}
    >
      <div className={'flex'}>
        <TextInput {...form.register('email')}
                   id={'email'}
                   placeholder={'Enter your email'}
                   labelText={'Email'}/>
        <TextInput {...form.register('password')}
                   type={'password'}
                   placeholder={'Enter your password'}
                   id={'password'}
                   labelText={'Password'}/>
      </div>
      <Button type={'submit'}>Login</Button>
    </FluidForm>
  </>
}

