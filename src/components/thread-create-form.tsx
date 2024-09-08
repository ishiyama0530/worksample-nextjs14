"use client";

import type { CreateThreadData } from "@/actions/createThread";
import { createThread, createThreadSchema } from "@/actions/createThread";
import { FormError } from "@/components/element/form-error";
import { FormButton } from "@/components/element/from-button";
import { TermsCheckBox } from "@/components/element/terms-check-box";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  getFormProps,
  getInputProps,
  getTextareaProps,
  useForm,
} from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

export type ThreadCreateFormProps = {
  className?: string;
};

export function ThreadCreateForm({ className }: ThreadCreateFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isTermsChecked, setTermsChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [postKeyword, setPostKeyword] = useState("");

  const [lastResult, action] = useFormState(createThread, {
    initialValue: {
      title: "",
      description: "",
      post: "",
      postKeyword: "",
      password: "",
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
      <h2 className="text-2xl font-bold mb-4 prose">スレッドを作成する</h2>
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
          placeholder="スレッドのタイトルを入力してください"
          className={cn({ "border-destructive": fields.title.errors })}
        />
        <FormError>{fields.title.errors}</FormError>
        <Input
          {...getInputProps(fields.description, {
            type: "text",
          })}
          placeholder="スレッドの説明を記述してください（オプション）"
          className={cn({
            "border-destructive": fields.description.errors,
          })}
        />
        <FormError>{fields.description.errors}</FormError>
        <Textarea
          {...getTextareaProps(fields.post)}
          rows={4}
          placeholder="最初のコメントを記述してください"
          className={cn("field-sizing-content", {
            "border-destructive": fields.post.errors,
          })}
        />
        <FormError>{fields.post.errors}</FormError>
        <Input
          {...getInputProps(fields.password, {
            type: "password",
          })}
          placeholder="削除用パスワードを入力してください"
          onChange={(e) => setPassword(e.target.value)}
          className={cn({ "border-destructive": fields.password.errors })}
        />
        {password && (
          <p className="px-2 text-xs text-muted-foreground">{password}</p>
        )}
        <FormError>{fields.password.errors}</FormError>
        <Input
          {...getInputProps(fields.postKeyword, {
            type: "password",
          })}
          placeholder="投稿用キーワードを入力してください"
          onChange={(e) => setPostKeyword(e.target.value)}
          className={cn({ "border-destructive": fields.postKeyword.errors })}
        />
        {postKeyword && (
          <p className="px-2 text-xs text-muted-foreground">{postKeyword}</p>
        )}
        <FormError>{fields.postKeyword.errors}</FormError>

        <div className="flex justify-center py-2">
          <TermsCheckBox checked={isTermsChecked} onClick={setTermsChecked} />
        </div>
        <FormButton type="submit" disabled={!isTermsChecked}>
          作成する！
        </FormButton>
      </form>
      <div className="flex justify-center py-2">
        <TermsCheckBox checked={isTermsChecked} onClick={setTermsChecked} />
      </div>
    </div>
  );
}
