import "./PostShare.css";
import ProfileImg from "../../assets/img/profileImg.jpg";

import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";

const PostShare = () => {
  return (
    <div className="PostShare">
      <img src={ProfileImg} alt="" />
      <div>
        <input type="text" placeholder="What's happening" />
      </div>
      <div className="postOptions">
        <div className="option">
          <UilScenery />
          Photo
        </div>
        <div className="option">
          <UilPlayCircle />
          Video
        </div>
        <div className="option">
          <UilLocationPoint />
          Location
        </div>
        <div className="option">
          <UilSchedule />
          Shedule
        </div>
      </div>
    </div>
  );
};

export default PostShare;
