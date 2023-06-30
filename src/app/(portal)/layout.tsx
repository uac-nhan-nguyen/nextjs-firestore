import './globals.scss'
import './globals.css'
import {InitApp} from "@/_components/InitApp";
import {ThemeSwitch} from "@/_components/ThemeSwitch";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
        <InitApp/>
        {children}

        <div className={'fixed bottom-0 flex justify-end border-ui-05 border-solid border-0 border-t-2 w-full'}>

          <div className={'p-2'}>
            <ThemeSwitch/>
          </div>
        </div>
      </div>
  )
}
