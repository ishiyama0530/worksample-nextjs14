import { z } from "zod";

export const schema = z.object({
  name: z.string().max(4),
});

export type FormState = z.infer<typeof schema>;
export type FieldErrors = Record<string, { message: string }>;

export const safeParse = (formData: FormData) =>
  schema.safeParse(Object.fromEntries(formData));

export const adjustError = (
  error: z.ZodError<{
    name: string;
  }>,
): FieldErrors =>
  Object.fromEntries(
    error.errors.map(({ path, message }) => [path[0], { message }]),
  );
