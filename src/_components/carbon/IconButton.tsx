import {HTMLAttributes, PropsWithChildren} from "react";
import c from 'classnames'

export const IconButton = (props: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  const {style, children, className, ...other} = props
  return <div className={c(className, 'cursor-pointer grid items-center justify-items-center',
    'min-w-[40px] min-h-[40px]',
    'hover:bg-field-hover'
  )} {...other}>
    {children}
  </div>
}