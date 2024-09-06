"use client";

import {
  type PostCommentData,
  postComment,
  postCommentSchema,
} from "@/app/_actions/postComment";
import { FormButton } from "@/components/from-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getFormProps, getTextareaProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";

export type PostFormProps = {
  threadId: string;
  className?: string;
};

export function PostForm({ threadId, className }: PostFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
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
    shouldRevalidate: "onInput",
  });

  useEffect(() => {
    if (lastResult.status === "success") {
      formRef.current?.reset();
    }
  }, [lastResult]);

  return (
    <div className={className}>
      <Card>
        <CardHeader>
          <CardTitle>Leave a comment</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            {...getFormProps(form)}
            ref={formRef}
            action={action}
            className="grid gap-4"
          >
            <input type="hidden" name="threadId" value={threadId} />
            <div className="grid gap-1">
              <Label htmlFor="message">Message</Label>
              <Textarea
                {...getTextareaProps(fields.content)}
                className="field-sizing-content"
                placeholder="Your message"
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
