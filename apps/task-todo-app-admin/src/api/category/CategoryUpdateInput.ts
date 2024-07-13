import { TaskUpdateManyWithoutCategoriesInput } from "./TaskUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  tasks?: TaskUpdateManyWithoutCategoriesInput;
};
