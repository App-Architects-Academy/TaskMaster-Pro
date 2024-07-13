import { Task } from "../task/Task";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  tasks?: Array<Task>;
};
