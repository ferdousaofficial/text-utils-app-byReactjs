import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handelThemeSwitcher = function () {
    if (theme === "dark") {
      setTheme("light");
    }else{
      setTheme("dark");
    }
  };

  return (
    <>
      <nav className="bg-[#EAEDED] dark:bg-slate-800 h-16 flex items-center justify-center relative">
        <div className="logo font-noto">
          <h2 className="dark:text-white font-medium text-slate-800 text-2xl ">
            Text Utils
          </h2>
        </div>
        <div
          className="mode absolute right-5 cursor-pointer"
          onClick={handelThemeSwitcher}
        >
          {theme === "light" ? (
            <MoonIcon className="w-5 text-slate-800" />
          ) : (
            <SunIcon className="w-6 text-[#ffec99]" />
          )}
        </div>
      </nav>
    </>
  );
}
