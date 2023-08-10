export const Reply = ({ userImagePath, username, replyText, likeNum }) => {
  return 
  <div>
  <image src ={userImagePath}></image>
  <span>{username}</span>
  <span>{replyText}</span>
  <span>{likeNum}</span>
  </div>;
};
