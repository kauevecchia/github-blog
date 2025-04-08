import * as z from "zod";

export const searchFormSchema = z.object({
  searchInput: z.string(),
});
