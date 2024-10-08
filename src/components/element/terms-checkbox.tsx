"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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
          <a
            href="/terms"
            className="underline text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            利用規約
          </a>
          に同意する
        </Label>
      </div>
    </div>
  );
};
