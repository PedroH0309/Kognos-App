import type { Metadata } from "next";
import "./globals.css";
import "./design-system.css";
import "./onboarding-polish.css";
import "./auth-entry.css";
import "./kognos-clean-ui.css";
import "./kognos-e-study.css";
import "./kognos-motion-theme.css";
import "./kognos-profile-planner-fixes.css";

export const metadata: Metadata = {
  title: "Kognos | Estude além dos limites",
  description: "Aprendizagem inteligente, trilhas personalizadas e um tutor que se adapta ao seu ritmo.",
  icons: { icon: "/brand/kognos-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}