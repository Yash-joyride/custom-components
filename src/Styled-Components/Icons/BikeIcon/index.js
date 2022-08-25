import CircularProgressIcon from "../CircularProgressIcon";
import IconWrapper from "../IconWrapper";

const BikeIcon = ({ value }) => {
  return (
    <IconWrapper>
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="21"
          cy="21"
          r="20"
          fill="#D92C2C"
          stroke="#FD5151"
          stroke-width="2"
        />
        <path
          d="M24.5 16.0625C24.5 16.8008 23.8984 17.375 23.1875 17.375C22.4492 17.375 21.875 16.8008 21.875 16.0625C21.875 15.3516 22.4492 14.75 23.1875 14.75C23.8984 14.75 24.5 15.3516 24.5 16.0625ZM19.25 25.25C19.25 27.1914 17.6641 28.75 15.75 28.75C13.8086 28.75 12.25 27.1914 12.25 25.25C12.25 23.3359 13.8086 21.75 15.75 21.75C17.6641 21.75 19.25 23.3359 19.25 25.25ZM15.75 27.4375C16.9531 27.4375 17.9375 26.4805 17.9375 25.25C17.9375 24.0469 16.9531 23.0625 15.75 23.0625C14.5195 23.0625 13.5625 24.0469 13.5625 25.25C13.5625 26.4805 14.5195 27.4375 15.75 27.4375ZM29.75 25.25C29.75 27.1914 28.1641 28.75 26.25 28.75C24.3086 28.75 22.75 27.1914 22.75 25.25C22.75 23.3359 24.3086 21.75 26.25 21.75C28.1641 21.75 29.75 23.3359 29.75 25.25ZM26.25 27.4375C27.4531 27.4375 28.4375 26.4805 28.4375 25.25C28.4375 24.0469 27.4531 23.0625 26.25 23.0625C25.0195 23.0625 24.0625 24.0469 24.0625 25.25C24.0625 26.4805 25.0195 27.4375 26.25 27.4375ZM19.5234 20.3555C19.2773 20.5469 19.3047 20.957 19.6055 21.0937L21.4922 22.0508C21.7109 22.1602 21.875 22.3789 21.875 22.625V26.125C21.875 26.5078 21.5742 26.7812 21.2187 26.7812C20.8359 26.7812 20.5625 26.5078 20.5625 26.125V23.0352L19.0039 22.2695C17.8281 21.6953 17.6914 20.082 18.7578 19.2891L20.8086 17.7852C21.4648 17.3203 22.3945 17.4297 22.8867 18.0586L23.9258 19.3437H25.375C25.7305 19.3437 26.0312 19.6445 26.0312 20C26.0312 20.3828 25.7305 20.6562 25.375 20.6562H23.625C23.4062 20.6562 23.2148 20.5742 23.1055 20.4102L21.875 18.8789C21.793 18.7969 21.6562 18.7695 21.5742 18.8516L19.5234 20.3555Z"
          fill="#FCFCFC"
        />
      </svg>
      <CircularProgressIcon value={value} />
    </IconWrapper>
  );
};

export default BikeIcon;
