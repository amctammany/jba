import { ComponentProps } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { SchemaFieldError } from "@/lib/validateSchema";
import clsx from "clsx";

export type InputProps = {
  name: string;
  label?: string | React.ReactNode;
  //defaultValue?: any;
  disabled?: boolean;
  error?: SchemaFieldError;
  //onChange?: (e: SyntheticEvent) => void;
  //onBlur?: (e: SyntheticEvent) => void;
  //value?: any;
  //ref?: any;
} & VariantProps<typeof inputStyles> &
  ComponentProps<"input">;
//export default InputProps;
export const inputStyles = cva(
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
//export const Input = forwardRef<HTMLInputElement, InputProps>(
export function Input({
  name,
  onChange,
  onBlur,
  value,
  error,
  className,
  disabled,
  //label,
  //defaultValue,
  variant,
  size,
  ref,
  ...props
}: InputProps) {
  return (
    <input
      disabled={disabled}
      className={clsx(
        className,
        inputStyles({
          variant: error ? "error" : variant,
          size,
        }),
      )}
      //className="block w-full disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
      type="text"
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      {...props}
      ref={ref}
    />
  );
}
