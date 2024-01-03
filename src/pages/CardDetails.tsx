import { Balance } from "@/components/patterns/Balance";
import { CreditCard, getCardDimension } from "@/components/ui/CreditCard";
import { Button } from "@/components/ui/button";
import { ICreditCard } from "@/types";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface CardDetailsProps {
  goBack: () => void;
  card: ICreditCard;
}

export function CardDetails(props: CardDetailsProps) {
  const cardDimensions = getCardDimension();
  console.log("card details", props.card);
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 right-0 bottom-0 left-0 overflow-y-auto z-50 bg-gradient-to-t from-slate-800 to-slate-700 px-5"
    >
      <div className="header py-4 px-2">
        <div className="layout-container">
          <Button
            className="bg-transparent px-0 -ml-2"
            onClick={() => props.goBack?.()}
          >
            <ArrowLeft />
          </Button>
        </div>
      </div>
      <div className="layout-container">
        <div className="vstack align-around gap-5 h-full">
          <h1 className="text-[32px] self-start font-bold  leading-[41px] tracking-tight pt-8">
            Salary <br /> Card
          </h1>
          <div className="self-middle">
            <motion.div
              layout
              layoutId={"card" + props.card.number.replace(" ", "-")}
              animate={{ rotate: 0, ...cardDimensions }}
            >
              <CreditCard {...props.card} />
            </motion.div>
          </div>
          <Balance amount={"2,748.00"} />
        </div>
      </div>
    </motion.div>
  );
}
