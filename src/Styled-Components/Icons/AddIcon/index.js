import AddWrapperIcon from "../WrapperAddIcon/index";
import IconWrapper from "../IconWrapper";

const AddIcon = ({ type }) => {
  return (
    <IconWrapper className="AddWrapper">
      {/* <AddWrapperIcon> */}
      <svg
        vertical-align="middle"
        width="13"
        height="19"
        viewBox="0 0 12 12"
        fill="#1F1F1F"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z"
          fill="#1F1F1F"
        />
      </svg>
      {/* </AddWrapperIcon> */}
    </IconWrapper>
  );
};

export default AddIcon;
