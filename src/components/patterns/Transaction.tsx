import { cn } from "@/lib/utils";
import { ITransaction } from "@/types";
import { cva } from "class-variance-authority";

interface TransactionProps extends ITransaction {}

const transactionText = cva("font-medium tracking-tight", {
  variants: {
    variant: {
      title: "text-base leading-relaxed",
      subTitle: "text-slate-400 text-sm leading-tight",
    },
  },
  defaultVariants: {
    variant: "subTitle",
  },
});

export function Transaction(props: TransactionProps) {
  return (
    <div className="hstack justify-between">
      <div className="hstack gap-2">
        <div
          className="w-10 h-10 rounded-full flex justify-center items-center"
          style={{ background: props.iconColor }}
        >
          <img src={props.icon} alt="" className=" w-4 aspect-square" />
        </div>
        <div>
          <h4 className={cn(transactionText({ variant: "title" }))}>
            {props.title}
          </h4>
          <div className={cn(transactionText({ variant: "subTitle" }))}>
            {props.subtitle}
          </div>
          {props.accountMeta ? (
            <>
              <div className={cn(transactionText({ variant: "subTitle" }))}>
                {props.accountMeta.accountNumber}
              </div>
              <div className={cn(transactionText({ variant: "subTitle" }))}>
                {props.accountMeta.date.toLocaleDateString()}
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className="currency">
        {props.type === "credit" ? "+" : "-"}
        {props.currencySymbol}
        {props.amount}
      </div>
    </div>
  );
}

Transaction.defaultProps = {
  currency: "USD",
  currencySymbol: "$",
};
