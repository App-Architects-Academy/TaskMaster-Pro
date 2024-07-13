import { JsonValue } from "type-fest";

export type Settings = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  settingName: string | null;
  settingValue: JsonValue;
};
