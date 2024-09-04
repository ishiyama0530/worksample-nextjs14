"use client";

import { createThread, createThreadScheme } from "@/app/_actions/create-thread";
import { FormButton } from "@/components/from-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type FieldErrors, safeParse } from "@/lib/validation";
import { type FormEvent, useState } from "react";
import { useFormState } from "react-dom";

export type ThreadCreateFormProps = {
  className?: string;
};

export function ThreadCreateForm({ className }: ThreadCreateFormProps) {
  const [state, action, isPending] = useFormState(createThread, {
    title: "",
  });
  const [clientErrors, setClientErrors] = useState<FieldErrors | undefined>();
  const fieldErrors = clientErrors ?? state.errors;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const result = safeParse(createThreadScheme, formData);

    if (result.ok) {
      setClientErrors(undefined);
    } else {
      setClientErrors(result.errors);
      event.preventDefault();
    }
  };

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4">Create a New Thread</h2>
      <form action={action} onSubmit={handleSubmit} className="grid gap-4">
        <Input type="text" placeholder="Thread Title" id="title" name="title" />
        {fieldErrors?.title && <p>{fieldErrors.title.message}</p>}
        <Input type="text" placeholder="Thread Description" />
        <Textarea
          placeholder="First Post"
          rows={4}
          className="field-sizing-content"
        />
        {state.title}
        <FormButton
          type="submit"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Submit
        </FormButton>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </form>
    </div>
  );
}
