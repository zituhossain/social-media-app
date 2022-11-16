import "./Post.css";
import Comment from "../../assets/img/comment.png";
import Share from "../../assets/img/share.png";
import Heart from "../../assets/img/like.png";
import NotLike from "../../assets/img/notLike.png";

const Post = ({ data }) => {
  return (
    <div className="Post">
      <img src={data.img} alt="" />

      <div className="postReact">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span>{data.likes} likes</span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
