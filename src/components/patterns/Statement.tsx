import { ITransaction } from "@/types";
import { Transaction } from "./Transaction";
import Transaction_Arrow_Icon from "@/assets/images/transaction_arrow.png";
import Transaction_Car_Icon from "@/assets/images/transaction_car.png";

const statements: ITransaction[] = [
  {
    id: "sdlkfj2839h2",
    title: "Card to card",
    subtitle: "Maria",
    amount: "143.00",
    type: "credit",
    accountMeta: {
      accountNumber: "xxxxxxxxxxx4586",
      date: new Date(2023, 9, 21, 10, 12, 0, 0),
    },
    icon: Transaction_Arrow_Icon,
    iconColor: "linear-gradient(180deg, #EC5B8F 0%, #DA3181 100%)",
  },
  {
    id: "tdlk271h1j9h2",
    title: "Uber",
    subtitle: "Service",
    amount: "467.00",
    type: "debit",
    accountMeta: {
      accountNumber: "xxxxxxxxxxx4586",
      date: new Date(2023, 9, 21, 10, 12, 0, 0),
    },
    icon: Transaction_Car_Icon,
    iconColor: "linear-gradient(180deg, #3DA2FF 0%, #2167F0 100%)",
  },
];

export function Statement() {
  return (
    <>
      <div className="py-4">
        <h2 className="pb-2">Today</h2>
        <div className="vstack gap-4 py-2">
          {statements.map((transaction) => (
            <div key={transaction.id}>
              <Transaction {...transaction} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
