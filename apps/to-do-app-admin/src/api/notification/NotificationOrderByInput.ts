import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  message?: SortOrder;
  recipient?: SortOrder;
  notificationType?: SortOrder;
};
