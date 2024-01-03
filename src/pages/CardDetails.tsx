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
    <div>
      <div className="header py-4 px-2" onClick={() => props.goBack?.()}>
        cross
      </div>
      <div className="vstack items-center align-middle h-full">
        <motion.div
          layout
          layoutId={"card" + props.card.id}
          animate={{ rotate: 0, ...cardDimensions }}
        >
          <CreditCard {...props.card} />
        </motion.div>
      </div>
    </div>
  );
}
