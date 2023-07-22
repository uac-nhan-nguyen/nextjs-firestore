import {PropsWithChildren, } from "react";
import c from 'classnames'

export const Sidenav = ({children, show, ...props}: PropsWithChildren & {
  show: boolean,
  onClose: () => void,
  onMouseLeave?: () => void,
  headerHeight: string,
  footerHeight: string,
  zIndex: number,
}) => {
  return <div>
    <div className={c('w-screen fixed left-0 cursor-w-resize',
      'duration-200 transition-all ease-out', {
      'pointer-events-auto opacity-100': show,
      'pointer-events-none opacity-0': !show,
    })}
         onClick={props.onClose}
         style={{
           top: `${props.headerHeight}`,
           zIndex: props.zIndex,
           minHeight: `calc(100vh - ${props.headerHeight} - ${props.footerHeight})`,
           backgroundColor: "rgba(0, 0, 0, 0.4)",
         }}
    />
    <div className={c('')}
         onClick={props.onClose}
         onMouseLeave={props.onMouseLeave}
         style={{
           zIndex: 100,
           position: "fixed",
           top: props.headerHeight,
           left: "0",
           minHeight: `calc(100vh - ${props.headerHeight} - ${props.footerHeight})`,
           backgroundColor: "var(--cds-layer-01)",
           minWidth: "256px",
           padding: "1rem",
           transition: "all ease-out 200ms",
           transform: show?  "translate(0, 0)" : "translate(-100%, 0)"
         }}
    >
      {children}
    </div>
  </div>
}
