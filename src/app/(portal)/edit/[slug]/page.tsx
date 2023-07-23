'use client'
import { PAGES } from './pages';
import HomeForm from '@/_views/forms/HomeForm';

export default function EditPage(props: {
    params: {
        slug: string
    }
}) {
    const schema = PAGES[props.params.slug];
    return <>
        <HomeForm
            onSubmit={async e => console.log(e)}
            onCancel={() => console.log('Cancel')}
        />
    </>
}