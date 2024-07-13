import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type TaskCreateInput = {
  dueDate?: Date | null;
  priority?: "Option1" | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  description?: string | null;
  category?: CategoryWhereUniqueInput | null;
};
