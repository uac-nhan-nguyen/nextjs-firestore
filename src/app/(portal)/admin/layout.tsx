'use client'
import {UIShell} from "@/_components/carbon/UIShell";
import {useUser} from "@/hooks/useUser";

export default function Layout() {
  const {user} = useUser();
  return <>
    <UIShell title={'Admin'}
             user={user && {
               email: user.email || undefined
             } || undefined}
             sidebarMenus={[
               {label: 'Pages', href: '/admin/pages'}
             ]}>
      children
    </UIShell>
  </>
}