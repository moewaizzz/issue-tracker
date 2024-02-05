import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">Title</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
