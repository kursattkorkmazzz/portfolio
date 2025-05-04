"use client";
import { cn } from "@/lib/cn";
import Panel, { PanelProps } from "../common/panel";

import SkillList from "@/../public/settings/skills.json";
import { motion } from "motion/react";
import SkillCard from "../ui/skill-card";

export default function Skills(props: PanelProps) {
  return (
    <Panel
      {...props}
      className={cn(
        "h-min flex flex-col items-center justify-start shrink-0 py-8",
        props.className
      )}
    >
      <motion.h2 className="text-4xl font-bold">Yetenekler</motion.h2>
      <motion.div className="flex flex-col gap-16">
        {SkillList.map((skill, index) => {
          return (
            <SkillCard
              indexNumber={index}
              key={skill.title}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              skills={skill.skills}
            />
          );
        })}
      </motion.div>
    </Panel>
  );
}
