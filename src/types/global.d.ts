import {PropsWithChildren, type ReactElement} from 'react'
import "@carbon/react";

declare module '@carbon/react' {
  export const InlineLoading: (props: {
    description?: string
    className?: string,
    iconDescription?: string,
    onSuccess?: () => void,
    status?: 'inactive' | 'active' | 'finished' | 'error'
    successDelay?: number,
  }) => ReactElement

  export const MenuButton: (props: PropsWithChildren & {
    label: string,
    kind?: 'primary' | 'tertiary' | 'ghost'
  }) => ReactElement

  export const Layer: (props: PropsWithChildren & {
  }) => ReactElement

  export const MenuItem: (props: {
    label: string,
    disabled?: boolean,
  }) => ReactElement
}
