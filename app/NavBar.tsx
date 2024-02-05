import Link from "next/link";
import React from "react";

const NavBar = () => {
  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/" },
  ];
  return (
    <nav className="flex space-x-6 border-b h-14 items-center ">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.lable}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
