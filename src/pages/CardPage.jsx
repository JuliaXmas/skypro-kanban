import { useParams } from "react-router-dom";
import BrowsePopup from "../components/popups/Browse/Browse";

function CurrentCard() {
  let { id } = useParams();

  return <BrowsePopup id={id} />;
}

export default CurrentCard;
