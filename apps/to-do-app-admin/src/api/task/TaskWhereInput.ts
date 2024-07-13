import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type TaskWhereInput = {
  id?: StringFilter;
  dueDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  isComplete?: BooleanNullableFilter;
  category?: CategoryWhereUniqueInput;
};
