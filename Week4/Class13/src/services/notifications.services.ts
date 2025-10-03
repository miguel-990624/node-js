/*import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { type INotification } from "../interfaces/notifications.interface.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filepath = join ( __dirname, "../models/notifications.interface.json");

const getNotificationsService = async (): Promise<INotification[]>  => {
    const data = await fs.readFile(filepath, "utf-8");
    return JSON.parse(data) as INotification[];
};

const getNotificationsByIDService = async (id:number): Promise<INotification | null> => {
    const notifications = await getNotificationsService();
    const notification = notifications.find( n => n.id === id );
    return notification || null;
};

const postNotificationsService = async ( newNotification: INotification ): Promise<INotification> => {
    const notifications = await getNotificationsService();
    notifications.push(newNotification);
    await fs.writeFile(filepath, JSON.stringify(notifications, null, 4), "utf-8");
    return newNotification;
};

const putNotificationsService = async ( id:number, updatedNotification: Partial<INotification> ): Promise<INotification | null> => {
    const notifications = await getNotificationsService();
    const index = notifications.findIndex( n => n.id === id );
    if ( index === -1 ) {
        return null;
    }
    notifications[index] = { ...notifications[index], ...updatedNotification, id } as INotification;
    await fs.writeFile(filepath, JSON.stringify(notifications, null, 4), "utf-8");
    return notifications[index];
};

const deleteNotificationsService = async (id:number): Promise<boolean> => {
    const notifications = await getNotificationsService();
    const index = notifications.findIndex( n => n.id === id );
    if ( index === -1 ) {
        return false;
    }
    notifications.splice(index, 1);
    await fs.writeFile(filepath, JSON.stringify(notifications, null, 4), "utf-8");
    return true;
};

export { getNotificationsService, getNotificationsByIDService, postNotificationsService, putNotificationsService, deleteNotificationsService };*/

import { Notification } from "../models/index.models.ts";
import type { NotificationCreation } from "../models/notifications.models.ts";

const getNotificationsService = async () => {
  return Notification.findAll();
};

const getNotificationsByIDService = async (id: number) => {
  return Notification.findByPk(id);
};

const postNotificationsService = async (newNotification: NotificationCreation) => {
  return Notification.create(newNotification);
};

const putNotificationsService = async (id: number, updatedBook: Partial<NotificationCreation>) => {
  const book = await Notification.findByPk(id);
  if (!book) return null;
  return book.update(updatedBook);
};

const deleteNotificationsService = async (id: number) => {
  const deleted = await Notification.destroy({ where: { id } });
  return deleted > 0;
};

export { getNotificationsService, getNotificationsByIDService, postNotificationsService, putNotificationsService, deleteNotificationsService };