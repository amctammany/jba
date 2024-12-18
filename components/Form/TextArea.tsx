import { ComponentProps, Ref, SyntheticEvent } from "react";
import { Label } from "./Label";
import { VariantProps, cva } from "class-variance-authority";
import { SchemaFieldError } from "@/lib/validateSchema";

export type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  error?: SchemaFieldError;
  disabled?: boolean;
  //defaultValue?: any;
  onChange?: (e: SyntheticEvent) => void;
  onBlur?: (e: SyntheticEvent) => void;
  //value?: any;
  ref?: Ref<HTMLTextAreaElement>;
} & VariantProps<typeof textAreaStyles> &
  ComponentProps<"textarea">;
const textAreaStyles = cva(["block"], {
  variants: {
    variant: {
      error: ["bg-warning-50"],
      default: [
        "disabled:bg-slate-50",
        "disabled:text-slate-500",
        "disabled:border-slate-200",
        "disabled:shadow-none",
      ],
    },
    size: {
      default: ["w-full"],
    },
  },
  defaultVariants: { size: "default", variant: "default" },
});

//export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
export function TextArea({
  name,
  label,
  rows,
  disabled,
  error,
  className,
  onChange,
  onBlur,
  value,
  variant,
  size,
  ref,
  ...props
}: TextAreaProps) {
  return (
    <Label className={className} error={error} label={label || name}>
      <textarea
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
        value={value}
        disabled={disabled}
        className={textAreaStyles({
          variant: error ? "error" : variant,
          size,
        })}
        //className="block w-full disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        name={name}
        rows={rows || 3}
        {...props}
      />
    </Label>
  );
}
