import { motion } from "framer-motion";
import MasterCardLogo from "@/assets/images/master_card_logo.png";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export function getCardDimension() {
  const windowWidth = window.innerWidth;

  const width = Math.min(windowWidth - 40, 340);

  return {
    width,
    height: width / 1.58,
  };
}

interface CardProps {
  variant?: "primary" | "secondary";
  number: string;
  bank: string;
}

const cardVariants = cva(
  " container m-auto rounded-xl relative text-white shadow-2xl",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-bl from-[#1b5cf6] via-[#429eff] to-[#cb5baa]",
        secondary:
          "bg-gradient-to-bl from-[#F6BF76] via-[#FF5F00] to-[#ee784a]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export function CreditCard({ variant, ...props }: CardProps) {
  const cardDimensions = getCardDimension();
  return (
    <motion.div
      className={cn(cardVariants({ variant }))}
      animate={cardDimensions}
    >
      <div className="w-full vstack py-4 justify-between h-full gap-2">
        <div className="flex justify-between">
          <div className="hstack">
            <p className="text-3xl font-black tracking-widest ">CB</p>
            <div className="flex items-center px-2">
              <p className="font-medium tracking-widest border-l border-white px-2 text-sm font-medium text-white text-opacity-60 ">
                {props.bank}
              </p>
            </div>
          </div>
        </div>
        <div className="hstack justify-between">
          <div className="w-16 h-12 bg-white bg-opacity-30 rounded-[10px]" />
          {/* <img src="" alt="" /> */}
        </div>
        <div className=""></div>
        <div className="">
          <p className="text-white text-md sm:text-[22px] font-bold tracking-tight">
            {props.number}
          </p>
          <div className="flex justify-between">
            <div className="">
              <div className="text-white text-opacity-60 text-sm font-normal tracking-tight">
                04/24
              </div>
            </div>
            <img src={MasterCardLogo} className="w-10" alt="master_card_logo" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

CreditCard.defaultProps = {
  variant: "primary",
  number: "4642 3489 9867 7632",
  bank: "Universal Bank",
};
