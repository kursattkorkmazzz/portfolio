"use client";
import BackgroundVideo from "@/components/common/background-video";
import Panel from "@/components/common/panel";
import About from "@/components/pages/about";
import Contact from "@/components/pages/contact";

import Hero from "@/components/pages/hero";
import Skills from "@/components/pages/skills";
import Testimonials from "@/components/pages/testimonails";
import ScrollIndicator from "@/components/ui/scrolli-indicator";
import useMobile from "@/hooks/useMobile";
import { cn } from "@/lib/cn";
import Icon from "@mdi/react";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isRow, setIsRow] = useState(false);
  const childElement = useRef<HTMLDivElement>(null);
  const childScroll = useScroll({
    container: childElement,
  });
  const parentElement = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();
  const childReachedTop = useRef<boolean>(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const heroHandler = (e: WheelEvent) => {
    if (e.deltaY > 20) {
      setIsRow(true);
    }
  };

  const childScrollHandler = (e: WheelEvent) => {
    if (!childElement.current) return;
    if (!parentElement.current) return;
    const deltaY = e.deltaY;
    const scrollTop = childElement.current.scrollTop;

    scrollTimeout.current && clearTimeout(scrollTimeout.current);

    if (deltaY < 0) {
      if (childReachedTop.current) {
        setIsRow(false);
        parentElement.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        childReachedTop.current = false;
      } else {
        if (deltaY < 0 && scrollTop == 0) {
          scrollTimeout.current = setTimeout(() => {
            childReachedTop.current = true;
          }, 50);
        }
      }
    } else {
      childReachedTop.current = false;
    }
  };

  // Registering Hooks
  useEffect(() => {
    const exitHandlers: Function[] = [];
    if (parentElement.current) {
      parentElement.current.addEventListener("wheel", heroHandler);
      exitHandlers.push(() => {
        parentElement.current?.removeEventListener("wheel", heroHandler);
      });
    }

    if (childElement.current) {
      childElement.current.addEventListener("wheel", childScrollHandler);
      exitHandlers.push(() => {
        childElement.current?.removeEventListener("wheel", childScrollHandler);
      });
    }

    return () => {
      exitHandlers.forEach((h) => h());
    };
  }, []);

  return (
    <Panel
      ref={parentElement}
      layout
      layoutScroll
      className={cn(
        "relative p-0 overflow-y-clip justify-start scroll-smooth",
        !isMobile ? "h-screen" : "h-min",
        isRow && !isMobile ? "flex-row" : "flex-column"
      )}
    >
      <Hero
        className={cn(isRow && !isMobile && "w-2/5 justify-end")}
        layout
        isRow={isRow}
        transition={{ duration: 0.5 }}
      />
      <Panel
        layout
        ref={childElement}
        className={cn(
          "relative overflow-y-scroll justify-start gap-16",
          isRow && !isMobile && "px-32",
          !isMobile && "w-3/5"
        )}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        transition={{ duration: 0.7 }}
      >
        <About />
        <Skills />
        <Testimonials />
        <Contact />
      </Panel>

      <ScrollIndicator
        isRow={isRow}
        childContainer={childElement}
        parentContainer={parentElement}
      />

      <BackgroundVideo />
    </Panel>
  );
}
