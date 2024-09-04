import type { ZodObject, ZodRawShape, z } from "zod";

export type SafeParseSuccess<T extends ZodRawShape> = {
  ok: true;
  data: z.infer<ZodObject<T>>;
};

export type FieldErrors = Record<string, { message: string }>;

export type SafeParseError = {
  ok: false;
  errors: FieldErrors;
};

// 関数の戻り値の型
type SafeParseResult<T extends ZodRawShape> =
  | SafeParseSuccess<T>
  | SafeParseError;

export const safeParse = <T extends ZodRawShape>(
  schemes: z.ZodObject<T>,
  formData: FormData,
): SafeParseResult<T> => {
  const { success, data, error } = schemes.safeParse(
    Object.fromEntries(formData),
  );

  if (success) {
    return { ok: true, data };
  }

  const errors = Object.fromEntries(
    error.errors.map(({ path, message }) => [path[0], { message }]),
  );

  return { ok: false, errors };
};
