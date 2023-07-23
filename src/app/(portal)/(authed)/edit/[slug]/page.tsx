'use client'
import {PAGES} from './pages';
import HomeForm from '@/_views/forms/HomeForm';
import {updateDoc, setDoc, doc, getDoc} from '@firebase/firestore'
import {db} from "@/firebase/config";
import {Breadcrumb} from "@/_components/basic/BreadCrumb";

export default function EditPage(props: {
  params: {
    slug: string
  }
}) {
  const {slug} = props.params;
  const schema = PAGES[slug];

  return <div className={'grid gap-4'}>


    <Breadcrumb paths={[
      {label: 'Pages', href: '/admin/pages'},
      {label: slug, href: '/edit/' + slug},
    ]}/>
    <h1>Edit page content</h1>
    <HomeForm
      slug={slug}
      fetch={async () => {

        const response = await getDoc(doc(db, 'content', slug));
        const data = response.data()
        return data ?? {};
      }}
      onSubmit={async data => {
        await setDoc(doc(db, 'content', slug), data);
      }}
      onCancel={() => console.log('Cancel')}
    />
  </div>
}