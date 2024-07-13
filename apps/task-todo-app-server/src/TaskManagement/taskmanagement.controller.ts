import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TaskManagementService } from "./taskmanagement.service";
import { CreateTaskInput } from "../taskManagement/CreateTaskInput";

@swagger.ApiTags("taskManagements")
@common.Controller("taskManagements")
export class TaskManagementController {
  constructor(protected readonly service: TaskManagementService) {}

  @common.Post("/tasks")
  @swagger.ApiOkResponse({
    type: CreateTaskInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateTask(
    @common.Body()
    body: string
  ): Promise<CreateTaskInput> {
        return this.service.CreateTask(body);
      }

  @common.Delete("/tasks/:taskId")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteTask(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.DeleteTask(body);
      }

  @common.Put("/tasks/:taskId")
  @swagger.ApiOkResponse({
    type: CreateTaskInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EditTask(
    @common.Body()
    body: string
  ): Promise<CreateTaskInput> {
        return this.service.EditTask(body);
      }

  @common.Get("/tasks")
  @swagger.ApiOkResponse({
    type: CreateTaskInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListAllTasks(
    @common.Body()
    body: string
  ): Promise<CreateTaskInput[]> {
        return this.service.ListAllTasks(body);
      }

  @common.Patch("/tasks/:taskId/complete")
  @swagger.ApiOkResponse({
    type: CreateTaskInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async MarkTaskAsComplete(
    @common.Body()
    body: string
  ): Promise<CreateTaskInput> {
        return this.service.MarkTaskAsComplete(body);
      }
}
