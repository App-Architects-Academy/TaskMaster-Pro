import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type TaskUpdateInput = {
  dueDate?: Date | null;
  title?: string | null;
  description?: string | null;
  isComplete?: boolean | null;
  category?: CategoryWhereUniqueInput | null;
};
