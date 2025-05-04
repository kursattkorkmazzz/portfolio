"use client";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Icon from "@mdi/react";
import * as Icons from "@mdi/js";
import { cn } from "@/lib/cn";
import { useState } from "react";
import useMobile from "@/hooks/useMobile";

const MotionIcon = motion.create(Icon);
export default function ScrollIndicator(props: {
  childContainer: React.RefObject<HTMLDivElement | null>;
  parentContainer: React.RefObject<HTMLDivElement | null>;
  isRow: boolean;
}) {
  const childScroll = useScroll({
    container: props.childContainer,
  });
  const isMobile = useMobile();
  const [isBottom, setIsBottom] = useState(false);

  useMotionValueEvent(childScroll.scrollYProgress, "change", (latest) => {
    if (latest > 0.95) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  });

  return !isMobile ? (
    <motion.div
      className={cn(
        "fixed flex flex-col  items-center justify-center gap-2 bottom-3 -translate-x-1/2 z-10  text-white",
        props.isRow ? "left-[calc(3.5/5*100%)]" : "left-1/2",
        isBottom && "cursor-pointer left-[calc(2.2/5*100%)]"
      )}
      onClick={() => {
        if (isBottom && props.childContainer.current) {
          props.childContainer.current.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }}
    >
      <MotionIcon
        layout
        className=" w-9 h-auto"
        path={Icons.mdiArrowDownBoldHexagonOutline}
        initial={{
          opacity: 0.6,
          y: 0,
          rotate: 0,
        }}
        animate={{
          y: !isBottom ? 10 : 0,
          rotate: isBottom ? 180 : 0,
        }}
        transition={{
          duration: 1,
          y: { duration: 0.9, repeat: Infinity, repeatType: "reverse" },
        }}
      />
      <AnimatePresence>
        {isBottom && (
          <motion.p
            className="text-sm text-white bg-black/50 px-2 py-1 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            En üst için tıkla
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  ) : null;
}
