import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import UserTaskNotificationBanner from "../../Styled-Components/UserTaskNotificationBanner";

const User_Task_Notification_Banner = ({ totalTask, ticket, update, task }) => {
  return (
    <ThemeProvider theme={theme}>
      <UserTaskNotificationBanner
        totalTask={totalTask}
        ticket={ticket}
        update={update}
        task={task}
      />
    </ThemeProvider>
  );
};

export { User_Task_Notification_Banner };
