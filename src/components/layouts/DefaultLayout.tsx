import { motion } from "framer-motion";
import { ComponentProps, ReactNode } from "react";
import { Footer } from "../patterns/Footer";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

interface DefaultLayoutProps extends ComponentProps<typeof motion.div> {
  children: ReactNode;
}

export function DefaultLayout({ children, ...props }: DefaultLayoutProps) {
  return (
    <motion.div
      variants={animations}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      {...props}
      className={`h-screen w-full bg-gradient-to-t from-slate-800 to-slate-700 ${props?.className}`}
    >
      {children}
      <Footer />
    </motion.div>
  );
}
