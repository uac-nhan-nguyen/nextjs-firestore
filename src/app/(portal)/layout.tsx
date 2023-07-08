import './globals.scss'
import './globals.css'
import {InitApp} from "@/_components/InitApp";
import {ThemeSwitch} from "@/_components/ThemeSwitch";
import Link from "next/link";
import {Application} from "@carbon/icons-react";
import {IconButton} from "@/_components/carbon/IconButton";


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <div>
      <InitApp/>
      {children}

      <div
        className={'fixed bottom-0 flex justify-end border-ui-05 border-solid border-0 border-t-2 w-full items-center'}>
        <Link href={'/components'} target={'_blank'}>
          <IconButton className={'no-underline text-text-primary'}>
            <Application size={24}/>
          </IconButton>
        </Link>
        <div className={'p-2'}>
          <ThemeSwitch/>
        </div>
      </div>
    </div>
  )
}
