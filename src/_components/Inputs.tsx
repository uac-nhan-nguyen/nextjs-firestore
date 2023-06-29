import {TextInputProps} from "@carbon/react/es/components/TextInput/TextInput";
import {TextInput} from "@carbon/react";

export const EmailInput = (props: TextInputProps) => {
  return <TextInput {...props}/>
}

export const PasswordInput = (props: TextInputProps) => {
  return <TextInput type={'password'} {...props}/>
}
