import Cover from "../../assets/img/cover.jpg";
import Profile from "../../assets/img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="Cover" />
        <img src={Profile} alt="Profile" />
      </div>

      <div className="ProfileName">
        <span>Jhon Doe</span>
        <span>Full Stack Developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>

      <span>My profile</span>
    </div>
  );
};

export default ProfileCard;