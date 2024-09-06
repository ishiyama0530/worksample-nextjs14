"use client";

import type { PostCommentData } from "@/app/_actions/postComment";
import { postComment, postCommentSchema } from "@/app/_actions/postComment";
import { FormButton } from "@/components/from-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";

export type PostFormProps = {
  threadId: string;
  className?: string;
};

export function PostForm({ threadId, className }: PostFormProps) {
  const [lastResult, action] = useFormState(postComment, {
    initialValue: {
      threadId,
      content: "",
    } satisfies PostCommentData,
  });
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: postCommentSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className={className}>
      <Card>
        <CardHeader>
          <CardTitle>Leave a comment</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            id={form.id}
            onSubmit={form.onSubmit}
            action={action}
            className="grid gap-4"
            noValidate
          >
            <input type="hidden" name="threadId" value={threadId} />
            <div className="grid gap-1">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message"
                rows={4}
                className="field-sizing-content"
                name="content"
                defaultValue={fields.content.initialValue}
              />
              <p>{fields.content.errors}</p>
            </div>
            {fields.threadId.errors && <p>{fields.threadId.errors}</p>}
            <FormButton type="submit">Submit</FormButton>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
