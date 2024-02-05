"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b h-14 items-center ">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li
            key={link.href}
            className={classnames({
              "text-zinc-500 ": link.href === currentPath,
              "text-zinc-900 ": link.href !== currentPath,
              "hover:font-bold transition-colors  text-zinc-800": true,
            })}
          >
            <Link href={link.href}>{link.lable}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
