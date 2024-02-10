import Image from "next/image";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { Button } from "@radix-ui/themes";
import Pagination from "./components/Pagination";
import LatestIssues from "./LatestIssues";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <>
      <LatestIssues />
    </>
  );
}
