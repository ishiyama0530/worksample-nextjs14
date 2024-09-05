"use client";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import { z } from "zod";

const schema = z.object({
  name: z.string().max(4),
});

const execute = async (_: unknown, formData: FormData) => {
  "server action";

  const submission = parseWithZod(formData, {
    schema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  // なにか変更処理

  redirect("/");
};

export default function PlaygroundPage2() {
  const [lastResult, action] = useFormState(execute, {
    initialValue: {
      name: "samoyed",
    },
  });

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
      <input type="text" name="name" defaultValue={fields.name.initialValue} />
      <p style={{ color: "red" }}>{fields.name.errors}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
