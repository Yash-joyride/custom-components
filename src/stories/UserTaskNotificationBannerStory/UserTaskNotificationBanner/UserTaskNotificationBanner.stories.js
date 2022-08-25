import React from "react";
import { User_Task_Notification_Banner } from "../UserTaskNotificationBanner";

export default {
  title: "Joyride/User Task Notification Banner/User Task Notification Banner",
  component: User_Task_Notification_Banner,
};

export const UserTaskNotificationBanner = () => (
  <User_Task_Notification_Banner totalTask="5" ticket="3" update="1" task="1" />
);
