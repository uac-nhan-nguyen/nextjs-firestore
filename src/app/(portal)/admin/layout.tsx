'use client'
import {UIShell} from "@/_components/carbon/UIShell";
import {useUser} from "@/hooks/useUser";
import {useEffect} from "react";
import {useRouter} from 'next/navigation'
import {Button} from "@carbon/react";

export default function Layout() {
  const {user} = useUser();
  const router = useRouter()

  useEffect(() => {
    if (user === null) {
      router.push('/login')
    }
  }, [user, router])

  if (user === undefined) {
    return <div>Loading...</div>
  }

  if (user === null) {
    return <div>Not login. Redirecting to login page...</div>
  }

  return <>
    <UIShell title={'Admin'}
             user={user && {
               email: user.email || undefined
             } || undefined}
             sidebar={<>
               <Button kind={'ghost'}>Pages</Button>
               <Button kind={'ghost'}>Components</Button>
             </>}
    >
      children
    </UIShell>
  </>
}