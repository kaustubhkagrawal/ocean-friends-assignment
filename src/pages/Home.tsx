import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ComponentProps, useState } from "react";
import { CardDetails } from "./CardDetails";
import { CreditCard, getCardDimension } from "@/components/ui/CreditCard";

import Slider from "react-slick";

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

const sliderSettings: ComponentProps<typeof Slider> = {
  dots: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  initialSlide: 0,
};

export function Home() {
  const [showCard, setShowCard] = useState(false);

  const { width, height } = getCardDimension();
  return (
    <DefaultLayout>
      <div className="vstack px-5 h-full">
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
            <div
              className={`relative max-w-full overflow-x-hidden min-h-80`}
              style={{ height: "300px" }}
            >
              <AnimatePresence mode="sync">
                {cards.length > 0
                  ? cards.map((card, index) => (
                      <motion.div
                        id={card.id}
                        layout
                        key={card.id}
                        layoutId={"card" + card.id}
                        animate={{
                          rotate: -90,
                          y: height / 3,
                          x: (height - width) / 2 + height * index + 20 * index,
                          width: width,
                          height: height,
                        }}
                        className={`absolute top-0`}
                      >
                        <CreditCard {...card} />
                      </motion.div>
                    ))
                  : null}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <CardDetails />
        )}
      </div>
    </DefaultLayout>
  );
}
