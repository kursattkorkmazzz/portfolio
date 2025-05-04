import { cn } from "@/lib/cn";
import { ButtonHTMLAttributes, HTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "cursor-pointer bg-accent text-white px-4 py-2 rounded hover:bg-accent/70 hover:scale-105 transition-all duration-300",
        props.className
      )}
    />
  );
}
