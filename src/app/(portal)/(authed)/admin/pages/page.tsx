'use client'

import {Breadcrumb} from "@/_components/basic/BreadCrumb";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@carbon/react";
import {useRouter} from "next/navigation";
import Link from "next/link";


const PAGES: {
  href: string,
  url?: string,
}[] = [{
  href: '/home',
  url: '/'
}]

export default function PagesPage() {
  const router = useRouter()
  return <div className={'grid gap-4'}>

    <Breadcrumb paths={[
      {label: 'Pages'}
    ]}/>

    <h1>Website pages</h1>

    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Preview Url</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {PAGES.map(i => {
          return <TableRow>
            <TableCell>
              <Link href={'/edit' + i.href}>
                {i.href}
              </Link>
            </TableCell>
            <TableCell>
              <Link href={i.url ?? i.href}>
                {i.url ?? i.href}
              </Link>
            </TableCell>
          </TableRow>
        })}
      </TableBody>
    </Table>
  </div>
}