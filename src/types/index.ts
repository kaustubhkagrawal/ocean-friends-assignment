export interface ICreditCard {
  id?: string;
  variant: "primary" | "secondary";
  number: string;
  bank: string;
}
