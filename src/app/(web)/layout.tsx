import '@/app/(web)/globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>{children}</div>
  )
}
