import { Balance } from "@/components/patterns/Balance";
import { CreditCard, getCardDimension } from "@/components/ui/CreditCard";
import { ICreditCard } from "@/types";
import { motion } from "framer-motion";

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
      className="fixed top-0 right-0 bottom-0 left-0 overflow-y-auto z-50 bg-slate-700 px-5"
    >
      <div className="header py-4 px-2" onClick={() => props.goBack?.()}>
        <div className="layout-container">cross</div>
      </div>
      <div className="layout-container">
        <div className="vstack align-around gap-5 h-full">
          <h1 className="text-[32px] self-start font-bold  leading-[41px] tracking-tight pt-8">
            Salary <br /> Card
          </h1>
          <div className="self-middle">
            <motion.div
              layout
              layoutId={"card" + props.card.id}
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
