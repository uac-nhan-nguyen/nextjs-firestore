import {type ReactElement} from 'react'
import "@carbon/react";

declare module '@carbon/react' {
  interface InlineLoadingProps {
    description?: string
    className?: string,
    iconDescription?: string,
    onSuccess?: () => void,
    status?: 'inactive'| 'active' | 'finished' | 'error'
    successDelay?: number,
  }

  export const InlineLoading: (props: InlineLoadingProps) => ReactElement
}
