import { SideMenuIconsConatiner } from "../../SideMenu/style";
import IconWrapper from "../IconWrapper";

const WalletIcon = () => {
  return (
    <IconWrapper>
      <SideMenuIconsConatiner>
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.25 0.625C12.7148 0.625 13.125 1.03516 13.125 1.5C13.125 1.99219 12.7148 2.375 12.25 2.375H2.1875C1.94141 2.375 1.75 2.59375 1.75 2.8125C1.75 3.05859 1.94141 3.25 2.1875 3.25H12.25C13.207 3.25 14 4.04297 14 5V11.125C14 12.1094 13.207 12.875 12.25 12.875H1.75C0.765625 12.875 0 12.1094 0 11.125V2.375C0 1.41797 0.765625 0.625 1.75 0.625H12.25ZM11.375 8.9375C11.8398 8.9375 12.25 8.55469 12.25 8.0625C12.25 7.59766 11.8398 7.1875 11.375 7.1875C10.8828 7.1875 10.5 7.59766 10.5 8.0625C10.5 8.55469 10.8828 8.9375 11.375 8.9375Z"
            fill="#FD5151"
          />
        </svg>
      </SideMenuIconsConatiner>
    </IconWrapper>
  );
};

export default WalletIcon;
