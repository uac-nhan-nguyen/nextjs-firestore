import '@/app/(web)/globals.css'
import Script from "next/script";


export default function RootLayout(props: {
  children: React.ReactNode
}) {
  return <>
    {props.children}
    <Script src="https://cdn.tailwindcss.com"/>
  </>
}
