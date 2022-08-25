import { SideMenuIconsConatiner, SideMenuIconsWrapper } from "../../SideMenu/style";
import NotificationIcon from "../NotificationIcon";
import IconAnalytics from "./analyticsIcon";

const AnalyticsIcon = () => {
  return (
    <SideMenuIconsWrapper>
      <NotificationIcon />
      <SideMenuIconsConatiner>
        <IconAnalytics />
      </SideMenuIconsConatiner>
    </SideMenuIconsWrapper>
  );
};

export default AnalyticsIcon;
