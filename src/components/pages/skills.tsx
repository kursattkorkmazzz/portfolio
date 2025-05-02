"use client";
import { cn } from "@/lib/cn";
import Panel, { PanelProps } from "../common/panel";

import SkillList from "@/../public/settings/skills.json";
import SkillCard from "../ui/skill-card";
import { motion } from "motion/react";

export default function Skills(props: PanelProps) {
  return (
    <Panel
      {...props}
      className={cn(
        "h-min flex flex-col items-center justify-start gap-5 shrink-0  py-8",
        props.className
      )}
    >
      <motion.h2 className="text-4xl font-bold">Yetenekler</motion.h2>
      {SkillList.map((skill, index) => {
        return (
          <SkillCard
            key={index}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
            baseColor={skill.baseColor}
            skills={skill.skills}
          />
        );
      })}
    </Panel>
  );
}
