import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { CreditCard } from "@/components/ui/CreditCard";
import { motion } from "framer-motion";

export function CardDetails() {
  return (
    <DefaultLayout>
      <div className="vstack items-center align-middle h-full">
        <motion.div layout layoutId="card" animate={{ rotate: 0, x: 0 }}>
          <CreditCard />
        </motion.div>
      </div>
    </DefaultLayout>
  );
}
