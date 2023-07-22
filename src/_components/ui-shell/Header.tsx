import c from "classnames";
import {IconButton} from "@/_components/carbon/IconButton";
import {Close, Menu} from "@carbon/icons-react";
import {DropdownOnClick, DropdownOnHover} from "@/_components/basic/Dropdown";
import {Button} from "@carbon/react";
import {User as UserIcon} from '@carbon/icons-react';
import { User } from "./UIShell";

export const Header = ({title, ...props}: {
  title: string,
  sidebarOpen: boolean,
  onBurgerClick: () => void,
  onLogout?: () => void,
  user?: User
}) => {
  return <div className={c('')} style={{
    backgroundColor: "var(--cds-layer-01)",
    display: "flex",
    alignItems: "center",
    padding: "1rem",
    gap: "1rem"
  }}>
    <IconButton onClick={props.onBurgerClick}>
      {props.sidebarOpen ?
        <Close size={32}/>
        : <Menu size={32}/>}
    </IconButton>
    <div>{title}</div>
    <div className={'flex-1'}/>
    {props.user?.email &&
      <DropdownOnClick
        button={<>
          <IconButton>
            <UserIcon size={24}/>
          </IconButton>
        </>}
      >
        <div className={'grid'} style={{
          backgroundColor: "var(--cds-layer-01)",
          boxShadow: "0 2px 6px 0 rgba(0,0,0,.2)"
        }}>
          <Button kind={'ghost'} size={'sm'}>{props.user.email}</Button>
          <Button kind={'ghost'} size={'sm'} onClick={props.onLogout}>Logout</Button>
        </div>
      </DropdownOnClick>
    }
  </div>
}