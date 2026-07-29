import type { ZodObject, ZodRawShape } from "zod";
import { ZodError } from "zod";

/**
 * Returns a formatted error message if the provided environment variables do not match the provided Zod schema.
 * @param schema - the Zod schema to enforce validation
 * @param buildEnv - the environment variables to validate against the schema, defaults to process.env
 * @throws {Error} - throws an error if the schema validation fails, with a message indicating which required values are missing
 */
export default function tryParseEnv<T extends ZodRawShape>(
  schema: ZodObject<T>,
  // eslint-disable-next-line node/no-process-env
  buildEnv: Record<string, string | undefined> = process.env,
) {
  try {
    schema.parse(buildEnv);
  }
  catch (error) {
    if (error instanceof ZodError) {
      let message = "Missing required values in .env\:\n";
      error.issues.forEach((issue) => {
        message += `${issue.path[0]?.toString()}\n`;
      });

      const fmtError = new Error(message);
      fmtError.stack = "";
      throw fmtError;
    }
  }
}
