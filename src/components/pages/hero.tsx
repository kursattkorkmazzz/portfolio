import { cn } from "@/lib/cn";
import Divider from "../common/divider";
import Panel, { PanelProps } from "../common/panel";
import SocialBar from "../ui/social-bar";
import AvatarCard from "../ui/avatar-card";
import {LayoutGroup, motion} from "motion/react";



export default function Hero(props: PanelProps & { isRow: boolean }) {
    
    
    return <Panel layout  className={cn("gap-3 overflow-visible min-h-screen items-center justify-center",props.className)}>
        
          <AvatarCard image="/images/me.png" className={props.isRow? "w-32 h-32" : ""}/>
        <motion.h2 layout transition={{ duration: 1 }} className="text-4xl md:text-5xl text-center text-nowrap ">Kürşat <span className="font-bold">KORKMAZ</span></motion.h2>
        <motion.p layout transition={{ duration: 1 }}  className="italic font-thin text-sm md:text-md text-nowrap">Full-Stack Developer & Software Project Manager</motion.p>
        <motion.div layout transition={{ duration: 1 }}  className="flex w-full justify-center items-center">
          <Divider transition={{ duration: 1 }}  className="w-[250px] h-[1px] bg-[repeating-linear-gradient(90deg,_orange_0px,_red_5px,_transparent_5px,_transparent_10px)] before:absolute before:top-0 before:left-0 before:w-full before:h-1 bg-transparent"/>
        </motion.div>
        <motion.p layout transition={{ duration: 1 }}  className="text-md md:text-lg  text-wrap text-center max-w-[500px]">Verimli ve ölçeklenebilir çözümler oluşturma tutkusuna sahip bir yazılım geliştiriciyim. Modern teknolojilerle ve size özel çözümlerle işinizi hıza kavuşturacak yazılımlar üretiyorum.</motion.p>
        <SocialBar layout transition={{ duration: 1 }} />
        
      </Panel>
}