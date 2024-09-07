"use client";

import type { CreateThreadData } from "@/actions/createThread";
import { createThread, createThreadSchema } from "@/actions/createThread";
import { FormError } from "@/components/element/form-error";
import { FormButton } from "@/components/element/from-button";
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
      <h2 className="text-2xl font-bold mb-4 prose">Create a New Thread</h2>
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
        <FormError>{fields.title.errors}</FormError>
        <Input
          {...getInputProps(fields.description, {
            type: "text",
          })}
          placeholder="Thread Description"
        />
        <FormError>{fields.description.errors}</FormError>
        <Textarea
          {...getTextareaProps(fields.post)}
          rows={4}
          className="field-sizing-content"
          placeholder="First Post"
        />
        <FormError>{fields.post.errors}</FormError>
        <FormButton type="submit">Submit</FormButton>
      </form>
    </div>
  );
}
