//import { ComponentProps, SyntheticEvent, forwardRef } from "react";
import { Label } from "./Label";
import { cva } from "class-variance-authority";
//import { SchemaFieldError } from "@/lib/validateSchema";
import { InputProps, Input, inputStyles } from "./Input";
//import { ComponentProps } from "react";
import clsx from "clsx";

export type TextFieldProps = InputProps;
const textFieldStyles = cva(
  "disabled:bg-slate-50 disabled:shadow-none disabled:text-slate-500 disabled:border-slate-200",
  {
    variants: {
      variant: {
        error: ["border-2 border-red-500"],
        default: ["block"],
      },
      size: {
        default: ["w-full"],
      },
    },
    defaultVariants: { size: "default", variant: "default" },
  },
);
//export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
export function TextField({
  name,
  onChange,
  onBlur,
  value,
  error,
  className,
  disabled,
  label,
  variant,
  size,
  ref,
  ...props
}: TextFieldProps) {
  return (
    <Label
      error={error}
      className={clsx(textFieldStyles({ variant, size }), className)}
      label={label || name}
    >
      <Input
        disabled={disabled}
        className={inputStyles({
          variant: error ? "error" : variant,
          size,
        })}
        //className="block w-full disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        type="text"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        {...props}
        ref={ref}
      />
    </Label>
  );
}
