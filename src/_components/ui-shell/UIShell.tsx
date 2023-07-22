'use client'

import {PropsWithChildren, ReactNode, useState} from "react";
import c from 'classnames'
import {Sidenav} from "./Sidenav";
import {Header} from "./Header";

export type User = {
  email?: string,
}

export const UIShell = ({children, title, ...props}: PropsWithChildren & {
  title: string,
  user?: User,
  sidebar: ReactNode,
  hideSidebarHoverButton?: true,
  onLogout?: () => void,
}) => {
  const [sidebarOpen, _sidebarOpen] = useState('hide');
  return <div className={''}>
    <Header title={title}
            sidebarOpen={sidebarOpen !== 'hide'}
            user={props.user}
            onLogout={props.onLogout}
            onBurgerClick={() => {
              _sidebarOpen(prev => prev === 'hide' ? 'show' : 'hide');
            }}/>
    <Sidenav show={sidebarOpen !== 'hide'}
             onClose={() => _sidebarOpen('hide')}
             onMouseLeave={() => _sidebarOpen(prev => prev === 'showHover' ? 'hide' : prev)}
             footerHeight={'46px'}
             headerHeight={'72px'}
             zIndex={100}
    >
      {props.sidebar}
    </Sidenav>
    {/*Hover to show sidebar*/}

    <div className={c('p-[16px]')}>
      {children}
    </div>
  </div>
}

