import { cn } from "@/lib/cn";
import Panel, { PanelProps } from "../common/panel";
import { LayoutGroup, motion } from "motion/react";

export default function About(props: PanelProps) {
  return (
    <Panel
      layout
      className={cn("gap-5 px-0 h-screen shrink-0", props.className)}
    >
      <LayoutGroup>
        <motion.h2 layout className="text-4xl font-bold">
          Hakkımda
        </motion.h2>

        <motion.p className="text-base">
          Web uygulamaları geliştirme, API tasarlama ve sunucu yönetimi
          konularında çalışıyorum. Proje süreçlerinde temiz kod, performans ve
          güvenlik önceliğimdir. Çevik yöntemlerle ilerler, her zaman
          sürdürülebilir ve kullanıcı odaklı çözümler üretmeye odaklanırım.
          Amacım, hem yazılımın hem de sistemlerin uzun vadede sağlam ve
          yönetilebilir olmasını sağlamaktır.
        </motion.p>

        <button
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 hover:scale-105 transition-all duration-300"
          onClick={(e) => {
            e.preventDefault();
            document &&
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          İletişime Geç
        </button>
      </LayoutGroup>
    </Panel>
  );
}
