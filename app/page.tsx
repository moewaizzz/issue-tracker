import Image from "next/image";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { Button } from "@radix-ui/themes";
import Pagination from "./components/Pagination";

export default function Home() {
  return <Pagination currentPage={2} itemsCount={100} pageSize={10} />;
}
