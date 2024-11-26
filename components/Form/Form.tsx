import { VariantProps, cva } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
//import {
//FieldValues,
////Form as HookForm,
////SubmitHandler,
////UseFormHandleSubmit,
//} from "react-hook-form";

export type FormProps = {
  children?: ReactNode;
  action?: (data: FormData) => void;
  onSubmit?: any;
} & VariantProps<typeof formStyles> &
  ComponentProps<"form">;
const formStyles = cva(["flex-autao"], {
  variants: {
    variant: {
      default: ["bg-white"],
    },
    size: {
      default: ["w-full", "m-0", "p-0"],
    },
  },
  defaultVariants: { size: "default", variant: "default" },
});

export const Form = ({
  children,
  action,
  onSubmit,
  variant,
  size,
  ...props
}: FormProps) => {
  return (
    <form action={action} onSubmit={onSubmit} {...props}>
      <div className={formStyles({ size, variant })}>{children}</div>
    </form>
  );
};
