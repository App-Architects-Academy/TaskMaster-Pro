import { InputJsonValue } from "../../types";

export type SettingsUpdateInput = {
  settingName?: string | null;
  settingValue?: InputJsonValue;
};
