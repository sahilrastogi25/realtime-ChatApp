import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./ChatListing.scss";
export const ChatListing = () => {
  return (
    <div className="chat-cards-listing">
      <div className="card">
        <div className="img-container">
          <img
            src="https://i.pinimg.com/originals/8d/ec/f9/8decf9caed777b8d0d698e01270ce308.png"
            alt="user-img"
          />
        </div>
        <div className="card-detail">
          <h4 className="title">User 1</h4>
          <p className="desc">this is a message!</p>
        </div>
        <div className="time">10:20 PM</div>
        <div className="action-btn">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
};
