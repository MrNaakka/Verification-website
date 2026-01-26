import { Separator } from "@/components/ui/separator";
import ThemeChanger from "./themeChanger";

export default function Header() {
  return (
    <header className="pl-40 pr-40 h-1/15 flex flex-col w-full justify-between">
      <div className="flex pt-4 items-center w-full ml-2 text-1xl">
        <span className="w-3/5">BY MRNAAKKA</span>
        <span className="flex w-2/5 flex-row justify-between items-center">
          <a href="#installion-guide">GET STARTED</a>
          <ThemeChanger />
        </span>
      </div>
      <Separator className="!h-[2px]" />
    </header>
  );
}
