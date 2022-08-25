import OnboardCard from "../assets/images/onBoard.png";
import RiderFeedback from "../assets/images/riderFeedback.png";

export function getCard(name) {
  switch (name) {
    case "on_board_card":
      return OnboardCard;

    case "rider_feedback":
      return RiderFeedback;

    default:
      return "";
  }
}
