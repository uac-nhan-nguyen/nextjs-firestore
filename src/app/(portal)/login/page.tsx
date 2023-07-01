import {LoginCard} from "@/_views/LoginCard";
import Link from "next/link";
import {ThemeSwitch} from "@/_components/ThemeSwitch";

export default function Login() {
  return <>
    <LoginCard/>
    <div className={'px-[1em] mt-[1em]'}>
      <Link className={'no-underline text-text-primary'} href={'/signup'}>Does not have an account? Click <span className={'text-link-primary'}>here</span> to sign up.</Link>
    </div>
  </>
}