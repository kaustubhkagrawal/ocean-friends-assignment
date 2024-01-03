import React, { HTMLAttributes } from "react";

interface BalanceProps extends HTMLAttributes<HTMLDivElement> {
  amount: number | string;
}

export function Balance({ amount, ...props }: BalanceProps) {
  return (
    <div {...props}>
      <h2 className="text-slate-400 text-base font-bold font-['Poppins'] leading-relaxed tracking-tight">
        Balance
      </h2>
      <p className="text-white text-[26px] font-bold leading-relaxed tracking-tight">
        ${amount}
      </p>
    </div>
  );
}
