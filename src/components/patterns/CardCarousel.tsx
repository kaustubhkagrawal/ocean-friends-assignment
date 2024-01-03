import { CreditCard, getCardDimension } from "@/components/ui/CreditCard";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselDotNavigation,
  CarouselItem,
} from "@/components/ui/carousel";

import { ICreditCard } from "@/types";

interface CardCarouselProps {
  cards: ICreditCard[];
  onCardClick: (card: ICreditCard) => void;
}

export function CardCarousel({
  onCardClick,
  cards,
  ...props
}: CardCarouselProps) {
  const { width, height } = getCardDimension();

  return (
    <>
      <Carousel>
        <CarouselContent
          className={`relative max-w-full -ml-5`}
          style={{ height: width + 40 }}
        >
          {cards.length > 0
            ? cards.map((card) => (
                <CarouselItem
                  key={card.id}
                  style={{
                    width: height + 20,
                    height: width + 20,
                    flexBasis: height + 20,
                  }}
                  className="pl-5"
                >
                  <motion.div
                    id={card.id}
                    layout
                    key={card.id}
                    layoutId={"card" + card.id}
                    animate={{
                      rotate: -90,
                      y: height / 3,
                      x: (height - width) / 2,
                      width: width,
                      height: height,
                      opacity: 1,
                    }}
                    className={`absolute top-0`}
                    onClick={() => onCardClick(card)}
                  >
                    <CreditCard {...card} />
                  </motion.div>
                </CarouselItem>
              ))
            : null}
        </CarouselContent>

        {/* <CarouselPrevious />
        <CarouselNext /> */}
        <CarouselDotNavigation />
      </Carousel>
    </>
  );
}
