import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
export const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <form>
          <div className="profile-img">
            <input type="file" className="file-upload" />
            <FontAwesomeIcon icon={faUser} className="icon-block" />
          </div>
          <div className="profile-name">
            <FontAwesomeIcon icon={faUser} className="icon-block" />
            <input type="text" placeholder="Enter your name" name="name" />
          </div>
          <input type="submit" className="profile-submit-btn" value="Join" />
        </form>
      </div>
    </div>
  );
};
