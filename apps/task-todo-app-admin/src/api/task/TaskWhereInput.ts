import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type TaskWhereInput = {
  id?: StringFilter;
  dueDate?: DateTimeNullableFilter;
  priority?: "Option1";
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  description?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
};
