import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dueDate?: SortOrder;
  priority?: SortOrder;
  title?: SortOrder;
  userId?: SortOrder;
  description?: SortOrder;
  categoryId?: SortOrder;
};
