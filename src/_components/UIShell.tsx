import {PropsWithChildren} from "react";
import {Menu} from '@carbon/icons-react';


export const UIShell = ({children, title}: PropsWithChildren & {
  title: string,
}) => {
  return <>
    <Header title={title}/>
    {children}
  </>
}

const Header = ({title}: { title: string }) => {
  return <div className={'flex items-center gap-4 p-[1em]'}>
    <Menu size={32}/>
    <div>{title}</div>
  </div>
}