import './globals.scss'
import './globals.css'
import {InitApp} from "@/_components/InitApp";
import {Footer} from '@/_components/ui-shell/Footer';


export default function RootLayout(props: {
  children: React.ReactNode
}) {
  return (
    <div>
      <InitApp/>
      {props.children}
      <Footer/>
    </div>
  )
}
