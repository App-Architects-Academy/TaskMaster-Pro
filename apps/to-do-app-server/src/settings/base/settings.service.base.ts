/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Settings as PrismaSettings } from "@prisma/client";

export class SettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SettingsCountArgs, "select">): Promise<number> {
    return this.prisma.settings.count(args);
  }

  async settingsItems(
    args: Prisma.SettingsFindManyArgs
  ): Promise<PrismaSettings[]> {
    return this.prisma.settings.findMany(args);
  }
  async settings(
    args: Prisma.SettingsFindUniqueArgs
  ): Promise<PrismaSettings | null> {
    return this.prisma.settings.findUnique(args);
  }
  async createSettings(
    args: Prisma.SettingsCreateArgs
  ): Promise<PrismaSettings> {
    return this.prisma.settings.create(args);
  }
  async updateSettings(
    args: Prisma.SettingsUpdateArgs
  ): Promise<PrismaSettings> {
    return this.prisma.settings.update(args);
  }
  async deleteSettings(
    args: Prisma.SettingsDeleteArgs
  ): Promise<PrismaSettings> {
    return this.prisma.settings.delete(args);
  }
}