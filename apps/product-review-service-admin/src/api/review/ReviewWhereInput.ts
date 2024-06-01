import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReviewWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  rating?: IntNullableFilter;
};
