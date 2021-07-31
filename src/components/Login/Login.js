import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
export const Login = ({ handleLogin }) => {
  const [user, setUser] = useState({
    name: "",
    file: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  };

  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const onFileCHange = (e) => {
    setUser({ ...user, file: e.target.files[0] });
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="profile-img">
            <input
              type="file"
              className="file-upload"
              onChange={(e) => onFileCHange(e)}
            />
            <FontAwesomeIcon icon={faUser} className="icon-block" />
          </div>
          <div className="profile-name">
            <FontAwesomeIcon icon={faUser} className="icon-block" />
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={(e) => handleNameChange(e)}
            />
          </div>
          <input type="submit" className="profile-submit-btn" value="Join" />
        </form>
      </div>
    </div>
  );
};
