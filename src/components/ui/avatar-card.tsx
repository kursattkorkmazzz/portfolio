import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import { easeIn, HTMLMotionProps, motion } from "motion/react";

type AvatarCardProps = HTMLMotionProps<"img"> & {
  image: string;
};

export default function AvatarCard(props: AvatarCardProps) {
  return (
    <motion.img
      suppressContentEditableWarning
      {...props}
      src={props.image}
      alt={props.image}
      suppressHydrationWarning
      layout
      className={cn("w-48 h-48  mb-4 xl:mb-6 rounded-2xl", props.className)}
      initial={{ boxShadow: "0px 0px 0px 0px var(--color-accent)" }}
      animate={{ boxShadow: "0px 0px 20px 0px var(--color-accent)" }}
      transition={{
        layout: { duration: 1 },
        default: {
          duration: 1,
          repeat: Infinity,
          easeIn: "easeInOut",
          repeatType: "reverse",
        },
      }}
    />
  );
}
