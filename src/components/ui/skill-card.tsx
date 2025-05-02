"use client";
import { LayoutGroup, motion } from "motion/react";
import { Icon } from "@mdi/react";
import * as Icons from "@mdi/js";
import hex2rgb from "@/lib/hex2rgb";
import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";
import useMobile from "@/hooks/useMobile";

const MotionIcon = motion.create(Icon);
export default function SkillCard({
  title,
  description,
  icon,
  baseColor,
  skills,
}: {
  title: string;
  description: string;
  icon: string;
  baseColor: string;
  skills?: string[];
}) {
  const [isHover, setIsHover] = useState(false);
  const isMobile = useMobile();
  const rgb = hex2rgb(baseColor);
  const colorRGBStyleString = `${rgb.r},${rgb.g},${rgb.b}`;

  useEffect(() => {
    if (isMobile) {
      setIsHover(true);
    } else {
      setIsHover(false);
    }
  }, [isMobile]);

  return (
    <motion.div
      className="relative flex flex-col gap-4 items-center justify-center p-4 rounded-2xl"
      animate={{
        background: isHover
          ? `linear-gradient(to bottom, rgba(${colorRGBStyleString},1) 0%, rgba(${colorRGBStyleString},1) 100% , rgb(0,0,0) 0%)`
          : `linear-gradient(to bottom, rgba(${colorRGBStyleString},1) 0%, rgba(${colorRGBStyleString},0.5) 30% , rgb(0,0,0) 50%)`,
      }}
      onHoverStart={() => {
        !isMobile && setIsHover(true);
      }}
      onHoverEnd={() => {
        !isMobile && setIsHover(false);
      }}
    >
      <LayoutGroup>
        <motion.div
          className={`absolute z-1 left-1 top-1 right-1 bottom-1 rounded-2xl `}
          animate={{
            background: isHover
              ? `radial-gradient(circle at center top, rgba(${colorRGBStyleString},1) 0% ,rgba(${colorRGBStyleString}, 0.5) 20%, rgb(0,0,0) 60%)`
              : `radial-gradient(circle at center top, rgba(${colorRGBStyleString},1) 0% ,rgba(${colorRGBStyleString}, 1) 10%, rgb(0,0,0) 50%)`,
          }}
        ></motion.div>
        <MotionIcon
          path={(Icons as any)[icon]}
          className="pointer-events-none z-[2] w-14 h-auto"
          animate={{
            scale: isHover ? 1.2 : 1,
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.h3 className="z-[2] text-white text-xl font-semibold pointer-events-none">
          {title}
        </motion.h3>
        <motion.p className="z-[2] text-gray-300 pointer-events-none">
          {description}
        </motion.p>
        {skills && skills.length > 0 && (
          <motion.div className="flex flex-row flex-wrap justify-center gap-2 z-[2] pointer-events-none">
            {skills.map((skill, index) => {
              return (
                <motion.div
                  key={index}
                  className={cn(`px-2 py-1 text-sm rounded-full`)}
                  style={{
                    backgroundColor: baseColor,
                  }}
                >
                  {skill}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </LayoutGroup>
    </motion.div>
  );
}
