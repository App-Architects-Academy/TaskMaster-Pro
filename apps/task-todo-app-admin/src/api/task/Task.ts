import { User } from "../user/User";
import { Category } from "../category/Category";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dueDate: Date | null;
  priority?: "Option1" | null;
  title: string | null;
  user?: User | null;
  description: string | null;
  category?: Category | null;
};
