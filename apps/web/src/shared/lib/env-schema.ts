import { z } from "zod";
import { fromZodError } from "zod-validation-error";

const envSchema = z.object({
  SANITY_API_TOKEN: z.string(),
  GET_UNPUBLISHED_ENTRIES: z.literal("true").optional(),
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
  throw new Error(fromZodError(env.error, { prefix: "ENV SCHEMA" }).message);
}

type EnvSchemaType = z.infer<typeof envSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvSchemaType {}
  }
}
