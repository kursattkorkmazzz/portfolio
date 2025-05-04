"use client";
import useMobile from "@/hooks/useMobile";
import { cn } from "@/lib/cn";
import Icon from "@mdi/react";
import * as Icons from "@mdi/js";
import { cva } from "class-variance-authority";
import { LayoutGroup, motion } from "motion/react";
import { tr } from "motion/react-client";
import { Attributes, Key, useEffect, useState } from "react";
import { getBackgroundColor, getTextColor } from "@/lib/getColor";

const Variants = cva("", {
  variants: {
    color: {
      "0": "bg-green",
      "1": "bg-blue",
      "2": "bg-yellow",
      "3": "bg-purple",
      "4": "bg-orange",
    },
  },
  defaultVariants: {
    color: "0",
  },
});

type TesimonialCardProps = {
  indexNumber: number;
  title: string;
  description: string;
  icon: string;
  skills?: string[];
};

const MotionIcon = motion.create(Icon);

export default function SkillCard(props: TesimonialCardProps) {
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
          "pointer-events-none origin-left -z-[1] absolute top-0 left-0 right-0 bottom-0 w-full h-full",
          getBackgroundColor(props.indexNumber)
        )}
        animate={{
          scaleX: isHover ? 1 : 0,
        }}
        transition={{
          type: "easeInOut",
          duration: 0.5,
        }}
      ></motion.div>

      <motion.div className="pointer-events-none relative flex flex-col items-center justify-center h-min py-3 px-3 m-1 gap-1 bg-primary rounded-xl">
        <LayoutGroup>
          <MotionIcon
            path={(Icons as any)[props.icon]}
            className={cn(
              "pointer-events-none z-[2] w-14 h-auto",
              getTextColor(props.indexNumber)
            )}
            animate={{
              scale: isHover ? 1.2 : 1,
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.h3
            className={cn(
              "z-[2] text-xl font-semibold pointer-events-none",
              getTextColor(props.indexNumber)
            )}
          >
            {props.title}
          </motion.h3>
          <motion.p className="z-[2] text-gray-300 text-center pointer-events-none">
            {props.description}
          </motion.p>

          <motion.div className="flex flex-row px-5 flex-wrap justify-center gap-2 z-[2] pointer-events-none">
            {props.skills?.map((skill, index) => {
              return (
                <motion.div
                  key={index}
                  className={cn(
                    `px-2 py-1 text-sm rounded-full`,
                    getBackgroundColor(props.indexNumber)
                  )}
                >
                  {skill}
                </motion.div>
              );
            })}
          </motion.div>
        </LayoutGroup>
      </motion.div>
    </motion.div>
  );
}
