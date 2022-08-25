import LockSignWrapperIcon from "../WrapperLockSignIcon/index";
import LockIcon from "../LockIcon/index";
import IconWrapper from "../IconWrapper";

const LockSignIcons = ({ children }) => {
  return (
    <IconWrapper>
      <LockSignWrapperIcon>
        <LockIcon />
        {children}
      </LockSignWrapperIcon>
    </IconWrapper>
  );
};

export default LockSignIcons;
