"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issues/list" },
  ];
  return (
    <nav className="flex space-x-6 border-b h-14 items-center ">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classnames({
                "text-zinc-500 ": link.href === currentPath,
                "text-zinc-900 ": link.href !== currentPath,
                "hover:font-bold transition-colors  text-zinc-800": true,
              })}
            >
              {link.lable}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Log out</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Log in</Link>
        )}
      </Box>
    </nav>
  );
};

export default NavBar;
