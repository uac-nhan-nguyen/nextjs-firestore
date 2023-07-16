
```ts
import {ButtonHTMLAttributes, useState} from "react";
import {LoadingOverlay} from "@/components/basic/LoadingOverlay";
import {ActionButton, BlackButton} from "@/components/buttons/BasicButton";

const createAsyncButton = (ButtonComponent: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => Promise<void>,
  size?: number | string,
}>) => {
// eslint-disable-next-line react/display-name
  return ({onClick, size, ...props}: ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick: () => Promise<void>,
    size?: number | string,
  }) => {
    const [loading, setLoading] = useState(false);
    return <LoadingOverlay loading = {loading}
    size = {size ?? 32
  }>
    <ButtonComponent {...props}
    onClick = {async()
  =>
    {
      setLoading(true)
      await onClick()
      setLoading(false)
    }
  }
    />
    < /LoadingOverlay>
  }
}

export const AsyncBlackButton = createAsyncButton(BlackButton);
export const AsyncActionButton = createAsyncButton(ActionButton);

```
