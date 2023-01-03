import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";
import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Login Info", href: "/mct/datetime" },
    { name: "Posts", href: "/posts" },
    { name: "Docs", href: "/api/joke" },
  ];

  return (
    <div>
      <div class="bg-indigo-300 w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
        <div class="flex items-center flex-1">
          <LemonIcon />
          {/* change icon  */}
          <div class="text-2xl  ml-1 font-bold">
            Studio Machete
          </div>
        </div>
        <ul class="flex items-center gap-6">
          {menus.map((menu) => (
            <li>
              <a
                href={menu.href}
                class={"text-white-500 hover:text-gray-700 py-1 border-gray-500" +
                  (menu.href === active ? " font-bold border-b-2" : "")}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <nav class="px-4 py-3 flex justify-center bg-purple-300 w-full max-w-screen-lg">
        <a class="mx-4 hover:underline" href="/mct/datetime">Date</a>
      </nav>
    </div>
  );
}
