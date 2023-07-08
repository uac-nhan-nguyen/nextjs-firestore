import Link from 'next/link';

export const Breadcrumb = (props: {
  paths: {
    label: string;
    href?: string;
  }[];
}) => {
  return (
    <div className={'flex text-text-helper gap-2'}>
      {props.paths
        .map((i, index) => {
          const item = <div>{i.label}</div>;
          const ans = [];
          if (index !== 0) ans.push(<div key={'sep' + index.toString()}>{'/'}</div>);
          if (i.href != null) {
            ans.push(
              <Link key={index} className={'no-underline text-text-helper hover:text-link-primary'} href={i.href}>
                {item}
              </Link>
            );
          } else {
            ans.push(
              <div key={index} className='text-text-primary'>
                {item}
              </div>
            );
          }
          return ans;
        })
        .flat()}
    </div>
  );
};
