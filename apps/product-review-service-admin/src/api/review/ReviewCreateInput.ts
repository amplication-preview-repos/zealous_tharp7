import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReviewCreateInput = {
  content?: string | null;
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
};
