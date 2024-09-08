"use client";

import {
  type DeleteThreadData,
  deleteThread,
  deleteThreadSchema,
} from "@/actions/deleteThread";
import { FormButton } from "@/components/element/form-button";
import { FormError } from "@/components/element/form-error";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getRandomString } from "@/lib/random";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export type DeleteDialogProps = {
  threadId: string;
  children?: React.ReactNode;
};

export const DeleteDialog: React.FC<DeleteDialogProps> = ({
  threadId,
  children,
}) => {
  const [formId, setFormId] = useState("");
  const [open, setOpen] = useState(false);
  const [lastResult, action] = useFormState(deleteThread, {
    initialValue: {
      id: "",
      password: "",
    } satisfies DeleteThreadData,
  });
  const [form, fields] = useForm({
    lastResult,
    id: formId,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: deleteThreadSchema });
    },
    shouldRevalidate: "onInput",
  });

  useEffect(() => {
    if (open) {
      // フォーム入力値のリセットとエラーのクリア
      setFormId(getRandomString());
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>スレッドを削除します</DialogTitle>
          <DialogDescription className="py-2">
            この操作は取り消せません。スレッドを削除するにはパスワードを入力してください。
          </DialogDescription>
        </DialogHeader>
        <form {...getFormProps(form)} action={action} className="grid gap-4">
          <input type="hidden" name="id" value={threadId} />
          <div className="grid gap-4">
            <div className="space-y-2">
              <Input
                {...getInputProps(fields.password, {
                  type: "password",
                })}
                placeholder="削除用パスワードを入力してください"
              />
            </div>
            <FormError>{fields.password.errors}</FormError>
            <FormButton variant="destructive" className="w-full">
              確定する
            </FormButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
