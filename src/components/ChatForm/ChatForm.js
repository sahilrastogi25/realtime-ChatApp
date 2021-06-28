import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faPaperclip,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import "./ChatForm.scss";
export const ChatForm = () => {
  return (
    <div className="chat-form">
      <div className="action-btn">
        <FontAwesomeIcon className="icon-block" icon={faSmile} />
        <FontAwesomeIcon className="icon-block" icon={faPaperclip} />
      </div>
      <input type="text" placeholder="message" className="chat-input" />
      <FontAwesomeIcon className="icon-block" icon={faMicrophone} />
    </div>
  );
};
