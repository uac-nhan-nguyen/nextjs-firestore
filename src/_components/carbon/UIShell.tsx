'use client'
import {PropsWithChildren, useState} from "react";
import {Menu, Close, User} from '@carbon/icons-react';
import {IconButton} from "@/_components/carbon/IconButton";
import c from 'classnames'
import styles from './styles.module.css';
import Link from "next/link";
import {MenuButton, MenuItem, Layer, Button} from '@carbon/react'
import {DropdownOnClick, DropdownOnHover} from "@/_components/basic/Dropdown";

type SidenavMenu = {
  href?: string,
  label?: string,
  children?: SidenavMenu[],
}

type User = {

  email?: string,
}

export const UIShell = ({children, title, ...props}: PropsWithChildren & {
  title: string,
  sidebarMenus: SidenavMenu[],
  user?: User,
}) => {
  const [sidebarOpen, _sidebarOpen] = useState(false);
  return <>
    <Header title={title}
            sidebarOpen={sidebarOpen}
            user={props.user}
            onBurgerClick={() => {
              _sidebarOpen(prev => !prev);
            }}/>
    <Sidenav show={sidebarOpen}
             onClose={() => _sidebarOpen(false)}
             menus={props.sidebarMenus}/>
    {children}
  </>
}

const Header = ({title, ...props}: { title: string, sidebarOpen: boolean, onBurgerClick: () => void, user?: User }) => {
  return <div className={c(styles.UIShell, styles.noSelect)}>
    <IconButton onClick={props.onBurgerClick}>
      {props.sidebarOpen ?
        <Close size={32}/>
        : <Menu size={32}/>}
    </IconButton>
    <div>{title}</div>
    <div className={'flex-1'}/>
    {props.user?.email &&
      <Layer>
        <DropdownOnHover
          button={<>
            <IconButton>
              <User size={24}/>
            </IconButton>
          </>}
        >
          <div className={styles.dropdownContainer}>
            <Button kind={'ghost'} size={'sm'}>{props.user.email}</Button>
            <Button kind={'ghost'} size={'sm'}>Logout</Button>
          </div>
        </DropdownOnHover>
      </Layer>
    }
  </div>
}

const Sidenav = ({menus, show, ...props}: { show: boolean, onClose: () => void, menus: SidenavMenu[] }) => {
  return <>
    <div className={c(styles.UIShellVar, styles.sidenavCover, {
      [styles.sidenavCoverHide]: !show,
    })} onClick={props.onClose}/>
    <div className={c(styles.UIShellVar, styles.sidenav, {
      [styles.sidenavHide]: !show,
    })}>
      {menus.map((i, index) => {
        return <Link key={index} href={i.href ?? ''}>
          {i.label}
        </Link>
      })}
    </div>
  </>
}