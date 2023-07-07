import React, {PropsWithChildren, useRef, useState} from "react";

/**
 * Click button to open
 * Click button to close
 */
export const DropdownOnClick = <T, >(props: PropsWithChildren & {
  alignLeft?: true,
  title?: string,
  button: React.ReactElement,
}) => {
  const [show, setShow] = useState(false)

  return <>
    <div
      title={props.title}
      className={'DropdownOnClick'}
      style={{
        position: 'relative'
      }}>
      <div
        onClick={() => {
          setShow(prev => !prev);
        }}>
        {props.button}
      </div>
      {show && <div
        onClick={() => {
          setShow(false);
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }}
      />}
      <div
        onClick={() => {
          setShow(prev => !prev);
        }}
        style={{
          position: 'absolute',
          right: props.alignLeft ? undefined : 0,
          left: props.alignLeft ? 0 : undefined,

          transition: 'all ease 0.3s',
          pointerEvents: show ? 'all' : 'none',
          opacity: show ? 1 : 0,
          transform: show ? 'translate(0,0)' : 'translate(0, -1em)',
        }}>
        {props.children}
      </div>
    </div>
  </>
}

/**
 * Click button to open
 * Click button to close
 */
export const DropdownOnHover = <T, >(props: PropsWithChildren & {
  title?: string,
  className?: string,
  alignLeft?: true,
  button: React.ReactElement,
}) => {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  return <>
    <div className={'DropdownOnHover ' + props.className??''}
         title={props.title}
         style={{
           position: 'relative'
         }}
         onMouseEnter={() => setShow(true)}
         onMouseLeave={() => setShow(false)}>
      <div>
        {props.button}
      </div>
      {show && <div className={'DropdownOnHover-keep-hovering'}
                    style={{
                      position: 'absolute',
                      left: 0,
                      width: '100%',
                      height: ref?.current?.getBoundingClientRect().height,
                    }}/>}
      <div ref={ref}
           onClick={() => {
             setShow(prev => !prev);
           }}
           style={{
             position: 'absolute',
             right: props.alignLeft ? undefined : 0,
             left: props.alignLeft ? 0 : undefined,

             transition: 'all ease 0.3s',
             pointerEvents: show ? 'all' : 'none',
             opacity: show ? 1 : 0,
             transform: show ? 'translate(0,0)' : 'translate(0, -1em)',
           }}>
        {props.children}
      </div>
    </div>
  </>
}
