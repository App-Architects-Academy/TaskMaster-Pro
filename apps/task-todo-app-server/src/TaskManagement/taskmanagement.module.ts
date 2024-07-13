import { Module } from "@nestjs/common";
import { TaskManagementService } from "./taskmanagement.service";
import { TaskManagementController } from "./taskmanagement.controller";
import { TaskManagementResolver } from "./taskmanagement.resolver";

@Module({
  controllers: [TaskManagementController],
  providers: [TaskManagementService, TaskManagementResolver],
  exports: [TaskManagementService],
})
export class TaskManagementModule {}
