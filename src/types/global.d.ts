import {type ReactElement} from 'react'
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
}
