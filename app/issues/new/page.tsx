"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3 ">
      <TextField.Root>
        <TextField.Input placeholder="Search the docs…" />
      </TextField.Root>
      <TextArea placeholder="Reply to comment…" />
      <Button>Submit New Issues</Button>
    </div>
  );
};

export default NewIssuePage;
