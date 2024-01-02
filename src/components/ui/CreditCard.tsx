import { motion } from "framer-motion";

interface CardProps {
  bgGradient?: string[];
  number: string;
  bank: string;
}

export function CreditCard({ bgGradient, ...props }: CardProps) {
  return (
    <motion.div
      className={`w-96 h-56 m-auto ${
        bgGradient
          ? `bg-gradient-to-bl from-[#1b5cf6] via-[#429eff] to-[#cb5baa]`
          : "bg-red-100"
      } rounded-xl relative text-white shadow-2xl`}
    >
      <div className="w-full px-8 absolute">
        <div className="flex justify-between">
          <div className="hstack">
            <p className="text-3xl font-black leading-loose tracking-widest ">
              CB
            </p>
            <div className="flex items-center px-2">
              <p className="font-medium tracking-widest border-l border-white px-2 text-sm font-medium text-white text-opacity-60 ">
                {props.bank}
              </p>
            </div>
          </div>
        </div>
        <div className="hstack justify-between py-2">
          <div className="w-16 h-12 bg-white bg-opacity-30 rounded-[10px]" />
          {/* <img src="" alt="" /> */}
        </div>
        <div className="mt-5">
          <p className="font-medium tracking-more-wider">{props.number}</p>
        </div>
        <div className="pt-2 pr-6">
          <div className="flex justify-between">
            <div className="">
              <div className="text-white text-opacity-60 text-sm font-normal tracking-tight">
                04/24
              </div>
            </div>
            {/* <img src="" alt="" /> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

CreditCard.defaultProps = {
  bgGradient: ["#1b5cf6", "#429eff", "#cb5baa"],
  number: "4642 3489 9867 7632",
  bank: "Universal Bank",
};
