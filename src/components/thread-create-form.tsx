"use client";

import {
  type CreateThreadData,
  createThread,
  createThreadScheme,
} from "@/app/_actions/create-thread";
import { FormButton } from "@/components/from-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";

export type ThreadCreateFormProps = {
  className?: string;
};

export function ThreadCreateForm({ className }: ThreadCreateFormProps) {
  const [lastResult, action] = useFormState(createThread, {
    initialValue: {
      title: "",
      description: "",
      post: "",
    } satisfies CreateThreadData,
  });
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: createThreadScheme });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4">Create a New Thread</h2>
      <form
        id={form.id}
        onSubmit={form.onSubmit}
        action={action}
        className="grid gap-4"
        noValidate
      >
        <Input
          type="text"
          placeholder="Thread Title"
          name="title"
          defaultValue={fields.title.initialValue}
        />
        <p>{fields.title.errors}</p>
        <Input
          type="text"
          placeholder="Thread Description"
          name="description"
          defaultValue={fields.description.initialValue}
        />
        <p>{fields.description.errors}</p>
        <Textarea
          placeholder="First Post"
          rows={4}
          className="field-sizing-content"
          name="post"
          defaultValue={fields.post.initialValue}
        />
        <p>{fields.post.errors}</p>
        <FormButton
          type="submit"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Submit
        </FormButton>
      </form>
    </div>
  );
}
