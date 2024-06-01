import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReviewUpdateInput = {
  content?: string | null;
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
};
