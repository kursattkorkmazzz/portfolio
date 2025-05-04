import Panel from "../common/panel";
import { motion } from "motion/react";
import testimonalList from "@/../public/settings/testimonials.json";
import TestimonialCard from "../ui/testimonial-card";

export default function Testimonials() {
  return (
    <Panel className="shrink-1 h-min w-full justify-end items-center flex-col">
      <motion.h2 className="select-none text-3xl font-bold">Referans</motion.h2>
      {testimonalList.map((testimonal, index) => {
        return (
          <TestimonialCard key={index} {...testimonal} indexNumber={index} />
        );
      })}
    </Panel>
  );
}
