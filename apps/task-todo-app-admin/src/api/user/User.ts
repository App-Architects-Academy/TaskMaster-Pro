import { JsonValue } from "type-fest";
import { Task } from "../task/Task";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  tasks?: Array<Task>;
};
