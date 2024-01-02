import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { CardDetails } from "./CardDetails";
import { CreditCard } from "@/components/ui/CreditCard";

export function Home() {
  const [showCard, setShowCard] = useState(false);
  return (
    <DefaultLayout>
      <div className="vstack gap-5 bg-cyan-400 h-full">
        <div className="hstack gap-4">
          <button
            onClick={() => {
              setShowCard(false);
            }}
          >
            Home
          </button>
          <Link to={"/card"}>Card</Link>
          <button
            onClick={() => {
              setShowCard(true);
            }}
          >
            card
          </button>
        </div>
        {!showCard ? (
          <div className="hstack gap-4 h-80">
            <motion.div
              layout
              layoutId="card"
              animate={{ rotate: -90 }}
              className="relative top-30 h-96"
            >
              <CreditCard />
            </motion.div>
          </div>
        ) : (
          <CardDetails />
        )}
      </div>
    </DefaultLayout>
  );
}
