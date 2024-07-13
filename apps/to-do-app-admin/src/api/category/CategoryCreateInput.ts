import { TaskCreateNestedManyWithoutCategoriesInput } from "./TaskCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  description?: string | null;
  tasks?: TaskCreateNestedManyWithoutCategoriesInput;
};
