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
      <div className="vstack gap-5 px-5 h-full">
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
          <>
            <header>
              <h1 className="text-white text-[32px] font-bold  leading-[41px] tracking-tight pt-8">
                Bank <br /> Cards
              </h1>
              <h2 className="text-slate-400 text-base font-bold font-['Poppins'] leading-relaxed tracking-tight">
                Balance
              </h2>
              <p className="text-white text-[26px] font-bold leading-relaxed tracking-tight">
                $2,748.00
              </p>
            </header>
            <div className="hstack gap-4 flex-wrap max-w-full min-h-96 aspect-square overflow-x-hidden">
              <motion.div
                id="card-xyz"
                layout
                layoutId="card"
                animate={{ rotate: -90, x: 30 }}
                className="relative h-96"
              >
                <CreditCard />
              </motion.div>
            </div>
          </>
        ) : (
          <CardDetails />
        )}
      </div>
    </DefaultLayout>
  );
}
