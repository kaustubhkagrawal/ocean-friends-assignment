import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Balance } from "@/components/patterns/Balance";
import { CardCarousel } from "@/components/patterns/CardCarousel";
import { ICreditCard } from "@/types";
import { useState } from "react";
import { CardDetails } from "./CardDetails";
import { AnimatePresence, motion } from "framer-motion";

const cards: ICreditCard[] = [
  {
    id: "union-bank",
    bgGradient: ["#1b5cf6", "#429eff", "#cb5baa"],
    number: "4642 3489 9867 7632",
    bank: "Universal Bank",
  },
  {
    id: "central-bank",
    bgGradient: ["#1b5cf6", "#429eff", "#cb5baa"],
    number: "4642 3489 9867 7632",
    bank: "Central Bank",
  },
];

export function Home() {
  const [selectedCard, setSelectedCard] = useState<
    (typeof cards)[number] | null
  >(null);

  const onCardClick = (card: ICreditCard) => {
    setSelectedCard(card);
  };

  const goBack = () => {
    setSelectedCard(null);
  };

  return (
    <DefaultLayout>
      <div className="layout-container px-5 h-full">
        <AnimatePresence>
          {selectedCard === null ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="vstack h-full justify-around pb-24"
            >
              <header>
                <h1 className="text-white text-[32px] font-bold  leading-[41px] tracking-tight pt-8">
                  Bank <br /> Cards
                </h1>
                <Balance amount={"2,748.00"} />
              </header>
              <CardCarousel cards={cards} onCardClick={onCardClick} />
            </motion.div>
          ) : (
            <CardDetails goBack={goBack} card={selectedCard} />
          )}
        </AnimatePresence>
        {/* <AnimatePresence>
          {selectedCard !== null ? (
            
          ) : null}
        </AnimatePresence> */}
      </div>
    </DefaultLayout>
  );
}
