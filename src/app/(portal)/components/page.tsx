'use client'

import {Button} from "@carbon/react";

export default function Page() {
  return <div className={'grid gap-4'}>
    <div className={'flex gap-2'}>

      <Button>primary</Button>
      <Button kind={'tertiary'}>tertiary</Button>
      <Button kind={'secondary'}>secondary</Button>
      <Button kind={'ghost'}>ghost</Button>
      <Button kind={'danger'}>danger</Button>
    </div>
    <div>
    </div>
  </div>
}