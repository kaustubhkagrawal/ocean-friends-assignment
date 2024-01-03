import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { CreditCard, getCardDimension } from "@/components/ui/CreditCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CardDetails } from "./CardDetails";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardCarousel } from "@/components/patterns/CardCarousel";
import { ICreditCard } from "@/types";

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
            <CardCarousel cards={cards} onCardClick={onCardClick} />
          </>
        ) : (
          <CardDetails goBack={goBack} card={selectedCard} />
        )}
      </div>
    </DefaultLayout>
  );
}
