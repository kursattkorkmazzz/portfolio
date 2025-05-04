import { cn } from "@/lib/cn";
import Panel, { PanelProps } from "../common/panel";
import { LayoutGroup, motion } from "motion/react";
import Button from "../common/button";

export default function About(props: PanelProps) {
  return (
    <Panel
      layout
      className={cn(
        "gap-5 px-0 h-screen text-center shrink-0",
        props.className
      )}
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

        <Button
          onClick={(e) => {
            e.preventDefault();
            document &&
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          İletişime Geç
        </Button>
      </LayoutGroup>
    </Panel>
  );
}
