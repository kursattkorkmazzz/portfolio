import { cn } from "@/lib/cn";
import Divider from "../common/divider";
import Panel, { PanelProps } from "../common/panel";
import SocialBar from "../ui/social-bar";
import AvatarCard from "../ui/avatar-card";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import Icon from "@mdi/react";
import Contact from "./contact";
import useMobile from "@/hooks/useMobile";

export default function Hero(props: PanelProps & { isRow: boolean }) {
  const isMobile = useMobile();
  return (
    <Panel
      layout
      className={cn(
        "gap-1 overflow-visible min-h-screen flex-row items-center justify-center",
        props.className
      )}
    >
      <motion.div className="flex flex-col items-center justify-center">
        <AvatarCard
          image="/images/me.jpeg"
          className={props.isRow ? "w-64 h-64" : ""}
        />
        <motion.h2
          layout
          transition={{ duration: 1 }}
          className={cn(
            "text-4xl md:text-4xl text-center text-nowrap font-semibold",
            props.isRow && "md:text-2xl"
          )}
        >
          Kürşat <span className="">KORKMAZ</span>
        </motion.h2>
        <motion.p
          layout
          transition={{ duration: 1 }}
          className="italic font-thin text-sm md:text-md text-nowrap tracking-wide mt-1"
        >
          Full-Stack Developer & Software Project Manager
        </motion.p>

        {(!props.isRow || isMobile) && (
          <motion.p
            layout
            transition={{
              duration: 1,
            }}
            className="text-md  text-wrap text-center max-w-[600px] leading-[22px] tracking-wide mt-3"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.7,
              },
            }}
          >
            Verimli ve ölçeklenebilir çözümler oluşturma tutkusuna sahip bir
            yazılım geliştiriciyim. Modern teknolojilerle ve size özel
            çözümlerle işinizi hıza kavuşturacak yazılımlar üretiyorum.
          </motion.p>
        )}

        <SocialBar layout transition={{ duration: 1 }} className="mt-3" />
      </motion.div>
    </Panel>
  );
}
