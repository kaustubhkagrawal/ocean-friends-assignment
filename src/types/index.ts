export interface ICreditCard {
  variant: "primary" | "secondary";
  number: string;
  bank: string;
}

export interface ITransaction {
  id: string;
  amount: number | string;
  currency?: "USD";
  currencySymbol?: "$";
  type: "credit" | "debit";
  title: string;
  subtitle: string;
  accountMeta?: {
    accountNumber: string;
    date: Date;
  };
  icon: string;
  iconColor: string;
}
