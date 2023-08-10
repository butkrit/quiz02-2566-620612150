export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  const [Comments, setComments] = useState([]);
  return (
    <div>
      <img scr={userImagePath}></img>
      <span>{username}</span>
      <span>{commentText}</span>
      <span>{likeNum}</span>
      {/* map-loop render Reply component here */}
      {Comments.map((comments)=>(
          < comments 
            username =  {comments.username}
            userImagePath = {comments.userImagePath}
            commentText = {comments.commentText}
            likeNum = {comments.likeNum}
            replies = {comments.replies}
            key = {comments.username}
          />
        ))}
    </div>
  );
};
