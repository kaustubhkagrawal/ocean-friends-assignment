import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { CreditCard, getCardDimension } from "@/components/ui/CreditCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CardDetails } from "./CardDetails";

const cards = [
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

  const { width, height } = getCardDimension();

  const onCardClick = (card: (typeof cards)[number]) => {
    setSelectedCard(card);
  };

  const goBack = () => {
    setSelectedCard(null);
  };

  return (
    <DefaultLayout>
      <div className="vstack px-5 h-full">
        {selectedCard === null ? (
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
            <div
              className={`relative max-w-full`}
              style={{ height: width + 40 }}
            >
              {cards.length > 0
                ? cards.map((card, index) => (
                    <motion.div
                      id={card.id}
                      layout
                      key={card.id}
                      layoutId={"card" + card.id}
                      initial={{
                        x: (height - width) / 2 + height * index + 20 * index,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: -90,
                        y: height / 3,
                        x: (height - width) / 2 + height * index + 20 * index,
                        width: width,
                        height: height,
                        opacity: 1,
                      }}
                      className={`absolute top-0`}
                      onClick={() => onCardClick(card)}
                    >
                      <CreditCard {...card} />
                    </motion.div>
                  ))
                : null}
            </div>
          </>
        ) : (
          <CardDetails goBack={goBack} card={selectedCard} />
        )}
      </div>
    </DefaultLayout>
  );
}
