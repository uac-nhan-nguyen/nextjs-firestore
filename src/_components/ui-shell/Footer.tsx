import {ThemeSwitch} from "@/_components/ThemeSwitch";
import Link from "next/link";
import {Application} from "@carbon/icons-react";
import {IconButton} from "@/_components/carbon/IconButton";

export function Footer() {
  return <div
    className={"fixed bottom-0 flex justify-end border-ui-05 border-solid border-0 border-t-2 w-full items-center"}>
    <Link href={"/admin/components"}>
      <IconButton className={"no-underline text-text-primary"}>
        <Application size={24}/>
      </IconButton>
    </Link>
    <div className={"p-2"}>
      <ThemeSwitch/>
    </div>
  </div>;
}
