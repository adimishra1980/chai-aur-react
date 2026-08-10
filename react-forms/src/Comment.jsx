import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";
export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@adi",
      remarks: "you don't know me son!",
      rating: 5,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };
  return (
    <>
      <h3>All comments</h3>
      {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
          <span>{comment.remarks}</span> &nbsp;
          <span>(rating: {comment.rating})</span>
          <p>{comment.username}</p>
        </div>
      ))}

      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
