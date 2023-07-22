'use client'

import { Breadcrumb } from "@/_components/basic/BreadCrumb";
import { Table, TableHead, TableHeader, TableRow } from "@carbon/react";


export default function PagesPage() {
  return <div className={'grid gap-4'}>
    <Breadcrumb paths={[
      { label: 'Pages', href: '/admin/pages' },
      { label: 'Home', href: '/edit/home' },
    ]} />

    <Table>
      <TableHead><TableRow>
        <TableHeader>Name</TableHeader>
        <TableHeader>Preview Url</TableHeader>
      </TableRow></TableHead>
    </Table>
  </div>
}