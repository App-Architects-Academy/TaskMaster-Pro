export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField?: "Option1" | null;
  message: string | null;
  recipient: string | null;
  notificationType?: "Option1" | null;
};
