import FlagIconWrapper from "../WrapperFlagIcon";
import IconWrapper from "../IconWrapper";

const FlagIcon = () => {
  return (
    <IconWrapper className="FlagIconWrapper">
      {/* <FlagIconWrapper> */}
      <svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.29687 0.25C9.16016 0.25 9.04297 0.289062 8.90625 0.347656C8.02734 0.757812 7.36328 0.894531 6.81641 0.894531C5.64453 0.894531 4.96094 0.269531 3.61328 0.269531C2.92969 0.269531 2.08984 0.425781 0.9375 0.894531V0.71875C0.9375 0.464844 0.722656 0.25 0.46875 0.25C0.195312 0.25 0 0.464844 0 0.71875V9.78125C0 10.0547 0.195312 10.25 0.46875 10.25C0.722656 10.25 0.9375 10.0547 0.9375 9.78125V7.75C1.97266 7.30078 2.8125 7.14453 3.51562 7.14453C4.96094 7.14453 5.95703 7.75 7.40234 7.75C8.02734 7.75 8.73047 7.63281 9.57031 7.30078C9.84375 7.20312 10 6.98828 10 6.75391V0.855469C10 0.484375 9.66797 0.25 9.29687 0.25ZM9.0625 6.5C8.45703 6.71484 7.91016 6.8125 7.40234 6.8125C6.79687 6.8125 6.26953 6.67578 5.68359 6.53906C5.05859 6.38281 4.35547 6.20703 3.51562 6.20703C2.69531 6.20703 1.83594 6.38281 0.9375 6.73437V1.91016L1.28906 1.75391C2.20703 1.38281 2.96875 1.20703 3.61328 1.20703C4.16016 1.20703 4.57031 1.34375 5.03906 1.48047C5.52734 1.63672 6.09375 1.83203 6.81641 1.83203C7.5 1.83203 8.22266 1.65625 9.0625 1.30469V6.5Z"
          fill="#1F1F1F"
          fill-opacity="0.6"
        />
      </svg>
      {/* </FlagIconWrapper> */}
    </IconWrapper>
  );
};

export default FlagIcon;