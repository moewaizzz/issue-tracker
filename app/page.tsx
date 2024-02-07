import Image from "next/image";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { Button } from "@radix-ui/themes";

export default function Home() {
  return <Button>New Issues</Button>;
}
