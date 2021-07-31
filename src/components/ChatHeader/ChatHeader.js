import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faUser } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "./../../utils/helper";
import "./ChatHeader.scss";
export const ChatHeader = ({ friendInfo }) => {
  const { isOnline, profileImg, name, updatedAt } = friendInfo;
  return (
    <div className="chat-header">
      <div className="img-container">
        {profileImg ? (
          <img alt="profile-img" src={profileImg} />
        ) : (
          <FontAwesomeIcon className="icon-block" icon={faUser} />
        )}
      </div>
      <div className="card-detail">
        <h4 className="title">{name ? name : ""}</h4>
        <p className="desc">
          {isOnline
            ? "Online"
            : `Last seen ${updatedAt ? formatDate(updatedAt) : ""}`}
        </p>
      </div>
      <div className="action-items">
        <FontAwesomeIcon className="icon-block" icon={faEllipsisV} />
      </div>
    </div>
  );
};
