import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationWhereInput = {
  id?: StringFilter;
  typeField?: "Option1";
  message?: StringNullableFilter;
  recipient?: StringNullableFilter;
  notificationType?: "Option1";
};
