import { z } from "zod";
import { fromZodError } from "zod-validation-error";

const environmentSchema = z.object({
  SANITY_API_TOKEN: z.string(),
  GET_UNPUBLISHED_ENTRIES: z.literal("true").optional(),
});

const environment = environmentSchema.safeParse(process.env);

if (!environment.success) {
  throw new Error(
    fromZodError(environment.error, { prefix: "ENV SCHEMA" }).message
  );
}

export type EnvironmentSchemaType = z.infer<typeof environmentSchema>;
