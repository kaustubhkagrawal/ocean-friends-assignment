import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CreditCard } from "@/components/ui/CreditCard";

export function CardDetails() {
  return (
    <DefaultLayout>
      <div className="vstack items-center align-middle bg-yellow-400 h-full">
        <div className="hstack gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/card"}>Card</Link>
        </div>

        <motion.div layout layoutId="card" animate={{ rotate: 0 }}>
          <CreditCard />
        </motion.div>
      </div>
    </DefaultLayout>
  );
}
