"use client";

import {
  type DeleteThreadData,
  deleteThread,
  deleteThreadSchema,
} from "@/app/_actions/deleteThread";
import { FormButton } from "@/components/from-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    shouldValidate: "onBlur",
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
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Enter your password to confirm the deletion of this item.
          </DialogDescription>
        </DialogHeader>
        <form {...getFormProps(form)} action={action} className="grid gap-4">
          <input type="hidden" name="id" value={threadId} />
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                {...getInputProps(fields.password, {
                  type: "password",
                })}
                placeholder="Enter your password"
              />
            </div>
            <p>{fields.password.errors}</p>
            <FormButton variant="destructive" className="w-full">
              Confirm Deletion
            </FormButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
