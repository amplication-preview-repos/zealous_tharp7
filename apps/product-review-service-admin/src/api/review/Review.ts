import { Product } from "../product/Product";

export type Review = {
  content: string | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  rating: number | null;
  updatedAt: Date;
};
