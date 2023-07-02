import {ResetPasswordCard} from "@/_views/LoginCard";
import Link from "next/link";

export default function ResetPassword() {
  return <>
    <ResetPasswordCard hrefAfterSuccess="/login"/>
    <div className={'px-[1em] mt-[1em]'}>
      <Link className={'no-underline text-text-primary'} href={'/login'}><span className={'text-link-primary'}>Back to login</span></Link>
    </div>
  </>
}