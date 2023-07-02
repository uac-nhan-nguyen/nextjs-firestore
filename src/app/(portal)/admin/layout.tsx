import {UIShell} from "@/_components/carbon/UIShell";

export default function Layout() {
  return <>
    <UIShell title={'Admin'}
             sidebarMenus={[
               {label: 'Pages', href: '/admin/pages'}
             ]}>
      children
    </UIShell>
  </>
}