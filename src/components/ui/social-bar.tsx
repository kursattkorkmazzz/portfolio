"use client";
import { HTMLMotionProps } from "motion/react";
import IconLink from "../common/icon-link";
import Panel from "../common/panel";

import socialLinks from "@/../public/settings/social-media.json";
import { cn } from "@/lib/cn";

type SocialBarProps = HTMLMotionProps<"div">;
export default function SocialBar(props: SocialBarProps) {
  return (
    <Panel
      {...props}
      className={cn(
        "flex-row py-3 h-min gap-5 w-fit bg-transparent",
        props.className
      )}
    >
      {socialLinks.map((social, index) => {
        return (
          <IconLink
            key={index}
            icon={social.icon as any}
            link={social.link}
            target="_blank"
            className={cn(social.className)}
          />
        );
      })}
    </Panel>
  );
}
