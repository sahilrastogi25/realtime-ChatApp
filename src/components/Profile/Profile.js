import { useContext } from "react";
import "./Profile.scss";
import AuthContext from "../../context/AuthContext";
export const Profile = ({ handleLogout }) => {
  const userObj = useContext(AuthContext);
  const { profileImg, name } = userObj;
  return (
    <div className="profile-section">
      <div className="img-container">
        <img src={profileImg} alt="profile-img" />
      </div>
      <p>{name}</p>
      <div className="action-items" onClick={handleLogout}>
        <p className="logout">Logout</p>
      </div>
    </div>
  );
};
