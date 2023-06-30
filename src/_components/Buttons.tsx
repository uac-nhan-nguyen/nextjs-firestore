import {Button, ButtonProps, InlineLoading} from "@carbon/react";

export const ButtonWithLoading = ({loading, loadingMessage, ...props}: ButtonProps<any> & {
  loading?: boolean;
  loadingMessage?: string
}) => {
  if (loading) {
    return <InlineLoading description={loadingMessage}
                          className={'min-h-[48px] p-[1em]'}
    />
  }
  else {
    return <Button {...props}/>
  }
}