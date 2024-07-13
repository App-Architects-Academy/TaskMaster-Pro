import { Injectable } from "@nestjs/common";
import { CreateTaskInput } from "../taskManagement/CreateTaskInput";

@Injectable()
export class TaskManagementService {
  constructor() {}
  async CreateTask(args: CreateTaskInput): Promise<CreateTaskInput> {
    throw new Error("Not implemented");
  }
  async DeleteTask(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async EditTask(args: CreateTaskInput): Promise<CreateTaskInput> {
    throw new Error("Not implemented");
  }
  async ListAllTasks(args: string): Promise<CreateTaskInput[]> {
    throw new Error("Not implemented");
  }
  async MarkTaskAsComplete(args: string): Promise<CreateTaskInput> {
    throw new Error("Not implemented");
  }
}
