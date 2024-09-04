"use client";

import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

export type FormButtonProps = ComponentProps<typeof Button>;

export const FormButton: React.FC<FormButtonProps> = (props) => {
  const { pending } = useFormStatus();
  return <Button isLoading={pending} {...props} />;
};
