'use client'

import React, {useState} from "react";
import {signIn} from "@/hooks/useUser";
import {Button, FluidForm, Form, TextInput, InlineLoading, InlineNotification, ToastNotification} from "@carbon/react";
import {useForm} from "react-hook-form";
import {ButtonWithLoading} from "@/_components/Buttons";


export const LoginCard = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const form = useForm<{
    email: string,
    password: string,
  }>()
  return <>
    <FluidForm className={''}
               onSubmit={form.handleSubmit(async (data, event) => {
                 setSubmitting(true)
                 const [user, error] = await signIn(data.email, data.password)
                 if (error) setError(error);
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
      <div className={'md:flex'}>
        <ButtonWithLoading type={'submit'} loading={submitting} loadingMessage={'Signing in...'}>Login</ButtonWithLoading>
        {error && <Button kind={'danger--ghost'} onClick={() => setError(undefined)}>{error}</Button>}
      </div>
    </FluidForm>
  </>
}

