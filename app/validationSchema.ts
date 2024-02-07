import { z } from "zod";

export const IssueSchema = z.object({
  title: z.string().min(1).max(50),
  description: z.string().min(1),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1).max(50).optional(),
  description: z.string().min(1).optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required")
    .max(255)
    .optional()
    .nullable(),
});
