import { TaskCreateNestedManyWithoutCategoriesInput } from "./TaskCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  tasks?: TaskCreateNestedManyWithoutCategoriesInput;
};
