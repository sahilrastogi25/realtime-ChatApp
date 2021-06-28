import "./Chat.scss";
export const Chat = () => {
  return (
    <div className="chat-section">
      <div className="chat you">
        <span className="name">User 1</span>
        <p className="msg">this is a message!</p>
        <span className="time">10:30 PM</span>
      </div>
      <div className="chat me">
        <span className="name">You</span>
        <p className="msg">message received!</p>
        <span className="time">10:30 PM</span>
      </div>
    </div>
  );
};
