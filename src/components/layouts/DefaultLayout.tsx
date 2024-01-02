import { motion } from "framer-motion";
import { ComponentProps, ReactNode } from "react";

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
      className={`h-screen ${props?.className}`}
    >
      {children}
    </motion.div>
  );
}
