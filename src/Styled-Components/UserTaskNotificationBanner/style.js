import styled from "styled-components";

const UserTaskNotificationBannerWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colourMaterialSecondary};
  padding: 30px 30px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const TaskWrapper = styled.div`
  width: 87px;
  height: 96px;
  background: ${({ theme }) => theme.colourBrandPrimaryDark};
  border-radius: 4px;
  display: inline-grid;
  align-items: center;
  padding-left: 10px;
  margin: 10px;
`;

export { UserTaskNotificationBannerWrapper, TaskWrapper };
