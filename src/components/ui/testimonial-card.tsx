"use client";
import useMobile from "@/hooks/useMobile";
import { cn } from "@/lib/cn";
import { getBackgroundColor, getBorderColor } from "@/lib/getColor";
import { motion } from "motion/react";
import { useState } from "react";

type TesimonialCardProps = {
  indexNumber: number;
  image: string;
  name: string;
  message: string;
  position: string;
  company: string;
};

export default function TestimonialCard(props: TesimonialCardProps) {
  const isMobile = useMobile();
  const [isHover, setIsHover] = useState(isMobile ? true : false);
  return (
    <motion.div
      suppressHydrationWarning
      className={cn("relative overflow-hidden rounded-2xl")}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => !isMobile && setIsHover(false)}
    >
      <motion.div
        suppressHydrationWarning
        className={cn(
          "pointer-events-none origin-left -z-[1] absolute top-0 left-0 right-0 bottom-0 bg-white"
        )}
        animate={{
          scaleX: isHover ? 1 : 0,
        }}
        transition={{
          type: "easeInOut",
          duration: 0.5,
        }}
      ></motion.div>

      <motion.div
        className="pointer-events-none relative  m-1 p-4 rounded-2xl flex gap-4 h-min select-none"
        animate={{
          backgroundColor: isHover ? "#2D324Eff" : "#2D324E00",
        }}
        transition={{
          delay: isHover ? 0 : 0.6,
          duration: 0, // 0.6 güzel efekt veriyor
        }}
      >
        <motion.img
          src={props.image}
          alt={props.name}
          className={cn("w-16 h-16 rounded-full border-2 bg-white")}
        />
        <motion.div className="flex flex-col gap-4 items-end">
          <motion.p className="w-full overflow-hidden text-ellipsis">
            {props.message}
          </motion.p>
          <motion.div className="flex flex-col">
            <motion.h3 className="text-md font-bold">{props.name}</motion.h3>
            <motion.h3 className="text-xs font-semibold italic">
              {props.position} - {props.company}
            </motion.h3>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
