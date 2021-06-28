import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "./ChatHeader.scss";
export const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div className="img-container">
        <img
          src="https://i.pinimg.com/originals/8d/ec/f9/8decf9caed777b8d0d698e01270ce308.png"
          alt="user-img"
        />
      </div>
      <div className="card-detail">
        <h4 className="title">User1</h4>
        <p className="desc">Online</p>
      </div>
      <div className="action-items">
        <FontAwesomeIcon className="icon-block" icon={faEllipsisV} />
      </div>
    </div>
  );
};
