export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div>
      <img scr={userImagePath}></img>
      <span>{username}</span>
      <span>{commentText}</span>
      <span>{likeNum}</span>
      {/* map-loop render Reply component here */}
      
    </div>
  );
};
