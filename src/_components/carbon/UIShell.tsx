'use client'
import {PropsWithChildren, useState} from "react";
import {Menu, Close} from '@carbon/icons-react';
import {IconButton} from "@/_components/carbon/IconButton";
import c from 'classnames'
import styles from './styles.module.css';
import Link from "next/link";

type SidenavMenu = {
  href?: string,
  label?: string,
  children?: SidenavMenu[],
}
export const UIShell = ({children, title, ...props}: PropsWithChildren & {
  title: string,
  sidebarMenus: SidenavMenu[],
}) => {
  const [sidebarOpen, _sidebarOpen] = useState(false);
  return <>
    <Header title={title}
            sidebarOpen={sidebarOpen}
            onBurgerClick={() => {
              _sidebarOpen(prev => !prev);
            }}/>
    <Sidenav show={sidebarOpen}
             menus={props.sidebarMenus}/>
    {children}
  </>
}

const Header = ({title, ...props}: { title: string, sidebarOpen: boolean, onBurgerClick: () => void }) => {
  return <div className={c(styles.UIShell)}>
    <IconButton onClick={props.onBurgerClick}>
      {props.sidebarOpen ?
        <Close size={32}/>
        : <Menu size={32}/>}
    </IconButton>
    <div>{title}</div>
  </div>
}

const Sidenav = ({menus, show}: { show: boolean, menus: SidenavMenu[] }) => {
  return <div className={c(styles.sidenav, {
    [styles.sidenavHide]: !show,
  })}>
    {menus.map((i, index) => {
      return <Link href={i.href ?? ''}>
        {i.label}
      </Link>
    })}
  </div>
}