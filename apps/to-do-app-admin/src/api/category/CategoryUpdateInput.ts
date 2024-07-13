import { TaskUpdateManyWithoutCategoriesInput } from "./TaskUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  description?: string | null;
  tasks?: TaskUpdateManyWithoutCategoriesInput;
};
