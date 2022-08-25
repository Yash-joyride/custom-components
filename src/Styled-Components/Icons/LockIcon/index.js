import LockWrapperIcon from "../WrapperLockIcon";
import IconWrapper from "../IconWrapper";

const LockIcon = () => {
  return (
    <IconWrapper className="LockWrapperIcon">
      {/* <LockWrapperIcon> */}
      <svg
        width="9"
        height="11"
        viewBox="0 0 9 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.875 4.5V3.25C1.875 1.88281 2.98828 0.75 4.375 0.75C5.74219 0.75 6.875 1.88281 6.875 3.25V4.5H7.5C8.18359 4.5 8.75 5.06641 8.75 5.75V9.5C8.75 10.2031 8.18359 10.75 7.5 10.75H1.25C0.546875 10.75 0 10.2031 0 9.5V5.75C0 5.06641 0.546875 4.5 1.25 4.5H1.875ZM2.8125 4.5H5.9375V3.25C5.9375 2.39062 5.23437 1.6875 4.375 1.6875C3.49609 1.6875 2.8125 2.39062 2.8125 3.25V4.5ZM0.9375 9.5C0.9375 9.67578 1.07422 9.8125 1.25 9.8125H7.5C7.65625 9.8125 7.8125 9.67578 7.8125 9.5V5.75C7.8125 5.59375 7.65625 5.4375 7.5 5.4375H1.25C1.07422 5.4375 0.9375 5.59375 0.9375 5.75V9.5Z"
          fill="#1F1F1F"
          fill-opacity="0.6"
        />
      </svg>
      {/* </LockWrapperIcon> */}
    </IconWrapper>
  );
};

export default LockIcon;
