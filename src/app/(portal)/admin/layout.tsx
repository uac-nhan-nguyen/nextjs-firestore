'use client'
import {UIShell} from "@/_components/carbon/UIShell";
import {useUser} from "@/hooks/useUser";
import {PropsWithChildren, useEffect} from "react";
import {useRouter} from 'next/navigation'
import {Button} from "@carbon/react";
import Link from "next/link";

const SIDEBAR_MENUS: {
  label: string,
  href: string,
}[] = [
  {label: 'Pages', href: '/admin/pages'},
  {label: 'Blogs', href: '/admin/blogs'}
]

export default function Layout({children}: PropsWithChildren) {
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
               {SIDEBAR_MENUS.map(i => {
                 return <Link key={i.href} href={i.href}>
                   <Button kind={'ghost'}>{i.label}</Button>
                 </Link>
               })}
             </>}
    >
      {children}
    </UIShell>
  </>
}