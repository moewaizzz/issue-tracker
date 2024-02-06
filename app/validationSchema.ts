import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1).max(50),
  description: z.string().min(1),
});