import { HTMLAttributeReferrerPolicy, HTMLAttributes } from "react";
import {HTMLMotionProps, motion} from "motion/react";
import { cn } from "@/lib/cn";

type DividerProps = HTMLMotionProps<"div">

export default function Divider(props: DividerProps) {
    return <motion.div layout {...props} className={cn("bg-accent rounded-full w-full h-[3px]",props.className)}></motion.div>
}