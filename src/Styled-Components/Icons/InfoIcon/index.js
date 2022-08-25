import { Warningiconwrapper } from "../../Models/style";
import IconWrapper from "../IconWrapper";

const Infoicon = () => {
  return (
    <IconWrapper>
      <Warningiconwrapper>
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0.5C2.67188 0.5 0 3.19531 0 6.5C0 9.82812 2.67188 12.5 6 12.5C9.30469 12.5 12 9.82812 12 6.5C12 3.19531 9.30469 0.5 6 0.5ZM6 3.5C6.39844 3.5 6.75 3.85156 6.75 4.25C6.75 4.67188 6.39844 5 6 5C5.57812 5 5.25 4.67188 5.25 4.25C5.25 3.85156 5.57812 3.5 6 3.5ZM6.9375 9.5H5.0625C4.73438 9.5 4.5 9.26562 4.5 8.9375C4.5 8.63281 4.73438 8.375 5.0625 8.375H5.4375V6.875H5.25C4.92188 6.875 4.6875 6.64062 4.6875 6.3125C4.6875 6.00781 4.92188 5.75 5.25 5.75H6C6.30469 5.75 6.5625 6.00781 6.5625 6.3125V8.375H6.9375C7.24219 8.375 7.5 8.63281 7.5 8.9375C7.5 9.26562 7.24219 9.5 6.9375 9.5Z"
            fill="#595959"
          />
        </svg>
      </Warningiconwrapper>
    </IconWrapper>
  );
};
export { Infoicon };