import { EnvironmentSchemaType } from "@shared/lib/environment-schema";

declare global {
  namespace NodeJS {
    interface ProcessEnvironment extends EnvironmentSchemaType {}
  }
}
