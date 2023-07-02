import {HTMLAttributes, PropsWithChildren} from "react";
import styles from './styles.module.css';
import c from 'classnames'

export const IconButton = ({children, ...props}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  return <div className={c(styles.iconButton)} {...props}>{children}</div>
}