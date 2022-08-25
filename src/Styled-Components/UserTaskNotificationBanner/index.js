import * as React from "react";
import { UserTaskNotificationBannerWrapper, TaskWrapper } from "./style";
import {
  UserTaskNotificationBannerHeadingWrapper,
  UserTaskNotificationBannerSubHeadingWrapper,
  TaskNumberWrapper,
  TaskTextWrapper,
} from "../Typography/Paragraph";

const UserTaskNotificationBanner = ({ totalTask, ticket, update, task }) => {
  return (
    <UserTaskNotificationBannerWrapper>
      <div>
        <UserTaskNotificationBannerHeadingWrapper>
          Urgent Tasks
        </UserTaskNotificationBannerHeadingWrapper>
        <UserTaskNotificationBannerSubHeadingWrapper>
          You have {totalTask} items to attend to
        </UserTaskNotificationBannerSubHeadingWrapper>
      </div>
      <div>
        <TaskWrapper>
          <TaskNumberWrapper>{ticket}</TaskNumberWrapper>
          <TaskTextWrapper>Ticket(s)</TaskTextWrapper>
        </TaskWrapper>

        <TaskWrapper>
          <TaskNumberWrapper>{update}</TaskNumberWrapper>
          <TaskTextWrapper>Update(s)</TaskTextWrapper>
        </TaskWrapper>

        <TaskWrapper>
          <TaskNumberWrapper>{task}</TaskNumberWrapper>
          <TaskTextWrapper>Task(s)</TaskTextWrapper>
        </TaskWrapper>
      </div>
    </UserTaskNotificationBannerWrapper>
  );
};

export default UserTaskNotificationBanner;
