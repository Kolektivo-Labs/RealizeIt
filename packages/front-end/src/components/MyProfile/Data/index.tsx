import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { HTMLInputTypeAttribute } from "react";

type Props = {
  label: string;
  type: HTMLInputTypeAttribute;
  placeHolder: string;
  name: string;
};
export default function InputWithLabel({
  label,
  type,
  placeHolder,
  name,
}: Props) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="text" className="text-xs text-softGrayPlaceHolder">
        {label}
      </Label>
      <Input
        className={`relative placeholder:absolute placeholder:top-3`}
        id={placeHolder}
        name={name}
        type={type}
        placeholder={placeHolder}
      />
    </div>
  );
}
