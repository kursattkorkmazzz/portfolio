
import { cn } from "@/lib/cn";
import { HTMLAttributes, useEffect, useState } from "react";
import { HTMLMotionProps, motion} from "motion/react";

export type PanelProps = HTMLMotionProps<"div">

export default function Panel(props: PanelProps) {
   
  return (
    <motion.div  {...props} className={cn("flex flex-col items-center justify-center px-4 py-4 h-full w-full", props.className)}>
      {props.children}
    </motion.div>
  );

}