import { InputJsonValue } from "../../types";

export type SettingsCreateInput = {
  settingName?: string | null;
  settingValue?: InputJsonValue;
};
