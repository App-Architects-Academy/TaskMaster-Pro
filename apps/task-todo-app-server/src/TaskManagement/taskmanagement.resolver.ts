import * as graphql from "@nestjs/graphql";
import { CreateTaskInput } from "../taskManagement/CreateTaskInput";
import { TaskManagementService } from "./taskmanagement.service";

export class TaskManagementResolver {
  constructor(protected readonly service: TaskManagementService) {}

  @graphql.Mutation(() => CreateTaskInput)
  async CreateTask(
    @graphql.Args()
    args: CreateTaskInput
  ): Promise<CreateTaskInput> {
    return this.service.CreateTask(args);
  }

  @graphql.Mutation(() => String)
  async DeleteTask(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteTask(args);
  }

  @graphql.Mutation(() => CreateTaskInput)
  async EditTask(
    @graphql.Args()
    args: CreateTaskInput
  ): Promise<CreateTaskInput> {
    return this.service.EditTask(args);
  }

  @graphql.Query(() => [CreateTaskInput])
  async ListAllTasks(
    @graphql.Args()
    args: string
  ): Promise<CreateTaskInput[]> {
    return this.service.ListAllTasks(args);
  }

  @graphql.Mutation(() => CreateTaskInput)
  async MarkTaskAsComplete(
    @graphql.Args()
    args: string
  ): Promise<CreateTaskInput> {
    return this.service.MarkTaskAsComplete(args);
  }
}
