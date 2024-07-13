import { Category } from "../category/Category";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dueDate: Date | null;
  title: string | null;
  description: string | null;
  isComplete: boolean | null;
  category?: Category | null;
};
