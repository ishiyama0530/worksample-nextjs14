"use client";

import { execute } from "@/app/playground1/action";
import { adjustError, safeParse } from "@/app/playground1/validation";
import type { FieldErrors } from "@/lib/validation";
import type { FormEvent } from "react";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function PlaygroundPage1() {
  const [state, action] = useFormState(execute, {
    name: "husky",
  });

  const [clientErrors, setClientErrors] = useState<FieldErrors | undefined>();
  const fieldErrors = clientErrors ?? state.errors;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const { success, error } = safeParse(formData);

    if (success) {
      setClientErrors(undefined);
    } else {
      const errors = adjustError(error);
      setClientErrors(errors);
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit} action={action} noValidate>
      <input type="text" name="name" defaultValue={state.name} />
      <p style={{ color: "red" }}>{fieldErrors?.name.message}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
