import { ProductType } from "./ProductType.type";

export type OrderType = {
  email: string;
  name: string;
  address: string;
  total: number;
  cartItems: ProductType[];
};
