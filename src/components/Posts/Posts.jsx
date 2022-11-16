import "./Posts.css";
import { PostsData } from "../../Data/PostsData";
import Post from "../Post/Post";

const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => {
        return <Post />;
      })}
    </div>
  );
};

export default Posts;
