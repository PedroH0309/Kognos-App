import type { Metadata } from "next";
import "./globals.css";
import "./course-library.css";
import "./design-system.css";
import "./onboarding-polish.css";
import "./auth-entry.css";
import "./kognos-clean-ui.css";
import "./kognos-e-study.css";
import "./kognos-motion-theme.css";
import "./kognos-profile-planner-fixes.css";
import "./kognos-calendar.css";
import "./kognos-study-cycle.css";
import "./kognos-weekly-syllabus.css";
import "./kognos-classrooms.css";
import "./kognos-math-labs.css";
import "./kognos-math-stage2.css";
import "./kognos-study-explorer.css";
import "./kognos-science-labs.css";
import "./kognos-languages-writing.css";
import "./kognos-humanities-labs.css";
import "./kognos-visual-studios.css";
import "./kognos-external-and-3d-labs.css";
import "./kognos-study-rooms-stage8.css";
import "./kognos-curriculum-flow-stage9.css";
import "./kognos-tutor-page.css";
import "./kognos-universal-lessons.css";
import "./kognos-auth-motion.css";
import "./kognos-theme-switch.css";
import "./kognos-animated-navigation.css";
import "./kognos-practice-polish.css";
import "./kognos-usability-motion.css";

export const metadata: Metadata = {
  title: "Kognos | Estude além dos limites",
  description: "Aprendizagem inteligente, trilhas personalizadas e um tutor que se adapta ao seu ritmo.",
  icons: { icon: "/brand/kognos-icon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}