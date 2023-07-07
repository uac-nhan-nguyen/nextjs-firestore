'use client'

import {Button} from "@carbon/react";
import {DropdownOnClick, DropdownOnHover} from "@/_components/basic/Dropdown";
import {IconButton} from "@/_components/carbon/IconButton";
import styles from "@/_components/carbon/styles.module.css";
import {User} from "@carbon/icons-react";
import Link from "next/link";

export default function Page() {
  return <div className={''}>
    <h3 className={'font-bold'}>Components</h3>

    <div className={'grid gap-8 p-4'}>
      <div className={''}>
        <h1>Useful links</h1><br/>
        <Link href={'https://carbondesignsystem.com/guidelines/icons/library'}>Carbon icons</Link>
      </div>
      <div className={'flex gap-2 flex-wrap items-center'}>
        <h1>Buttons</h1>
        <Button>primary</Button>
        <Button kind={'tertiary'}>tertiary</Button>
        <Button kind={'secondary'}>secondary</Button>
        <Button kind={'ghost'}>ghost</Button>
        <Button kind={'danger'}>danger</Button>

        <div className={'w-full'}/>
        <h4>Icon Button</h4>
        <IconButton>
          <User size={24}/>
        </IconButton>
      </div>
      <div className={'flex gap-2 items-baseline'}>
        <h1>Dropdowns</h1>
        <DropdownOnHover
          title={'Show dropdown on hover'}
          alignLeft
          button={<>
            <IconButton>
              <User size={24}/>
            </IconButton>
          </>}
        >
          <div className={styles.dropdownContainer}>
            <Button kind={'ghost'} size={'sm'}>nhan.nguyen@uac.edu.au</Button>
            <Button kind={'ghost'} size={'sm'}>Logout</Button>
          </div>
        </DropdownOnHover>

        <DropdownOnClick
          title={'Show dropdown on click'}
          alignLeft
          button={<>
            <IconButton>
              <User size={24}/>
            </IconButton>
          </>}
        >
          <div className={styles.dropdownContainer}>
            <Button kind={'ghost'} size={'sm'}>nhan.nguyen@uac.edu.au</Button>
            <Button kind={'ghost'} size={'sm'}>Logout</Button>
          </div>
        </DropdownOnClick>

      </div>
    </div>
  </div>
}