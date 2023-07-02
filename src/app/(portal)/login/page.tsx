import { LoginCard } from "@/_views/LoginCard";
import Link from "next/link";

export default function Login() {
  return <>
    <LoginCard hrefAfterLogin="/admin" hrefSignUp="/signup" />
    <div className={'px-[1em] mt-[1em]'}>
      <Link className={'no-underline text-text-primary'} href={'/reset-password'}>Forgot password? Click <span className={'text-link-primary'}>here</span></Link>
    </div>
  </>
}