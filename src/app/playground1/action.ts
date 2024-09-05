"use server";

import type { FieldErrors, FormState } from "@/app/playground1/validation";
import { adjustError, safeParse } from "@/app/playground1/validation";
import { redirect } from "next/navigation";

export const execute = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState & { errors?: FieldErrors }> => {
  const { success, error } = safeParse(formData);
  if (!success) {
    return {
      ...prevState,
      errors: adjustError(error),
    };
  }

  // なにか変更処理

  redirect("/");
};
