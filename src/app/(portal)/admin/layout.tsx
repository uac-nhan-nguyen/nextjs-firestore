'use client'
import {UIShell} from "@/_components/ui-shell/UIShell";
import {useUser} from "@/hooks/useUser";
import {PropsWithChildren, useEffect} from "react";
import {usePathname, useRouter} from 'next/navigation'
import {Button} from "@carbon/react";
import Link from "next/link";
import c from 'classnames'

const SIDEBAR_MENUS: {
  label: string,
  href: string,
}[] = [
  {label: 'Pages', href: '/admin/pages'},
  {label: 'Blogs', href: '/admin/blogs'}
]

export default function Layout({children}: PropsWithChildren) {
  const {user, signOut} = useUser();
  const router = useRouter()
  const path = usePathname();

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
             onLogout={signOut}
             sidebar={<>
               {SIDEBAR_MENUS.map(i => {
                 const selected = i.href === path;
                 return <Link key={i.href} href={i.href} className={'grid no-underline'} >
                   <Button className={c('w-full text-text-primary', 'border-0 border-l-4 border-solid', {
                     'border-button-primary': selected,
                     'border-transparent': !selected,
                     'bg-background-selected': selected,
                   })} kind={'ghost'}
                           size={'sm'}>{i.label}</Button>
                 </Link>
               })}
             </>}
    >
      {children}
    </UIShell>
  </>
}