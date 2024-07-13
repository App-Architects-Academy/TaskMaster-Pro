import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dueDate?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  isComplete?: SortOrder;
  categoryId?: SortOrder;
};
