'use client'
import {PropsWithChildren, ReactNode, useState} from "react";
import {Menu, Close, User, ChevronRight} from '@carbon/icons-react';
import {IconButton} from "@/_components/carbon/IconButton";
import c from 'classnames'
import styles from './styles.module.css';
import Link from "next/link";
import {MenuButton, MenuItem, Layer, Button} from '@carbon/react'
import {DropdownOnClick, DropdownOnHover} from "@/_components/basic/Dropdown";

type User = {
  email?: string,
}

export const UIShell = ({children, title, ...props}: PropsWithChildren & {
  title: string,
  user?: User,
  sidebar: ReactNode,
}) => {
  const [sidebarOpen, _sidebarOpen] = useState('hide');
  return <div className={styles.UIShellVar}>
    <Header title={title}
            sidebarOpen={sidebarOpen !== 'hide'}
            user={props.user}
            onBurgerClick={() => {
              _sidebarOpen(prev => prev === 'hide' ? 'show' : 'hide');
            }}/>
    <Sidenav show={sidebarOpen !== 'hide'}
             onClose={() => _sidebarOpen('hide')}
             onMouseLeave={() => _sidebarOpen(prev => prev === 'showHover' ? 'hide' : prev)}
    >
      {props.sidebar}
    </Sidenav>
    {/*Hover to show sidebar*/}

    <div className={styles.sidenavHoverPadding}
         onMouseEnter={() => _sidebarOpen(prev => prev === 'hide' ? 'showHover' : prev)}
    >
      <ChevronRight size={16}/>
    </div>

    <div className={c(styles.pageContainer)}
    >
      {children}
    </div>
  </div>
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
    }
  </div>
}

const Sidenav = ({children, show, ...props}: PropsWithChildren & {
  show: boolean,
  onClose: () => void,
  onMouseLeave?: () => void,
}) => {
  return <div>
    <div className={c(styles.sidenavCover, {
      [styles.sidenavCoverHide]: !show,
    })} onClick={props.onClose}/>
    <div className={c(styles.sidenav, {
      [styles.sidenavHide]: !show,
    })}
         onMouseLeave={props.onMouseLeave}
    >
      {children}
    </div>
  </div>
}