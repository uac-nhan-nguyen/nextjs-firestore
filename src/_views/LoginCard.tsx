'use client'

import React, {useState} from "react";
import {signIn} from "@/hooks/useUser";
import {Button, FluidForm, Form, TextInput, InlineLoading} from "@carbon/react";
import {useForm} from "react-hook-form";
import {ButtonWithLoading} from "@/_components/Buttons";


export const LoginCard = () => {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<{
    email: string,
    password: string,
  }>()
  return <>
    <FluidForm className={''}
               onSubmit={form.handleSubmit(async (data, event) => {
                 setSubmitting(true)
                 console.log(data);
                 const [user, error] = await signIn(data.email, data.password)
                 console.log({user, error})
                 setSubmitting(false)
               })}
    >
      <TextInput {...form.register('email')}
                 id={'email'}
                 placeholder={'Enter your email'}
                 labelText={'Email'}/>
      <TextInput {...form.register('password')}
                 type={'password'}
                 placeholder={'Enter your password'}
                 id={'password'}
                 labelText={'Password'}/>
      <ButtonWithLoading type={'submit'} loading={submitting} loadingMessage={'Signing in...'}>Login</ButtonWithLoading>
    </FluidForm>
  </>
}

