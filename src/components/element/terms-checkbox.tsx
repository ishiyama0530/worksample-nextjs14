"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export type TermsCheckBoxProps = {
  checked?: boolean;
  onClick?: (nextValue: boolean) => void;
};

export const TermsCheckBox: React.FC<TermsCheckBoxProps> = ({
  checked,
  onClick,
}) => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={checked}
          onClick={() => onClick?.(!checked)}
        />
        <Label htmlFor="terms" className="cursor-pointer">
          <Link href="/terms" className="underline text-blue-700">
            利用規約
          </Link>
          に同意する
        </Label>
      </div>
    </div>
  );
};
