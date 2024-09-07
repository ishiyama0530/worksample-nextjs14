"use client";

import {
  type PostCommentData,
  postComment,
  postCommentSchema,
} from "@/actions/postComment";
import { FormError } from "@/components/element/form-error";
import { FormButton } from "@/components/element/from-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { getFormProps, getTextareaProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";

export type CommentPostFormProps = {
  threadId: string;
  className?: string;
};

export function CommentPostForm({ threadId, className }: CommentPostFormProps) {
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
          <CardTitle className="prose">Leave a comment</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            {...getFormProps(form)}
            ref={formRef}
            action={action}
            className="grid gap-4"
          >
            <input type="hidden" name="threadId" value={threadId} />
            <div className="grid gap-4">
              <Textarea
                {...getTextareaProps(fields.content)}
                className="field-sizing-content"
                placeholder="Your comment"
              />
              <FormError>{fields.content.errors}</FormError>
            </div>
            {fields.threadId.errors && <p>{fields.threadId.errors}</p>}
            <FormButton type="submit">Submit</FormButton>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
