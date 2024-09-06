"use client";

import type { CreateThreadData } from "@/app/_actions/createThread";
import { createThread, createThreadSchema } from "@/app/_actions/createThread";
import { FormButton } from "@/components/from-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  getFormProps,
  getInputProps,
  getTextareaProps,
  useForm,
} from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";

export type ThreadCreateFormProps = {
  className?: string;
};

export function ThreadCreateForm({ className }: ThreadCreateFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
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
      return parseWithZod(formData, { schema: createThreadSchema });
    },
    shouldRevalidate: "onInput",
  });

  useEffect(() => {
    if (lastResult.status === "success") {
      formRef.current?.reset();
    }
  }, [lastResult]);

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-4">Create a New Thread</h2>
      <form
        {...getFormProps(form)}
        ref={formRef}
        action={action}
        className="grid gap-4"
      >
        <Input
          {...getInputProps(fields.title, {
            type: "text",
          })}
          placeholder="Thread Title"
        />
        <p>{fields.title.errors}</p>
        <Input
          {...getInputProps(fields.description, {
            type: "text",
          })}
          placeholder="Thread Description"
        />
        <p>{fields.description.errors}</p>
        <Textarea
          {...getTextareaProps(fields.post)}
          rows={4}
          className="field-sizing-content"
          placeholder="First Post"
        />
        <p>{fields.post.errors}</p>
        <FormButton type="submit">Submit</FormButton>
      </form>
    </div>
  );
}
