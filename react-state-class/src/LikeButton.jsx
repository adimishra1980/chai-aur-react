import { useState } from "react";

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let [clicks, setClicks] = useState(0);

    function toggleLike() {
        setIsLiked(!isLiked);
        setClicks(clicks+1)
    }
    let redLike = {color: "red"}
  return (
    <div>
        <p>How many times you clicked: {clicks}</p>
      <p>Like Button</p>
      <p onClick={toggleLike}> 
        {
            isLiked ? <i className="fa-solid fa-heart" style={redLike}></i> : <i className="fa-regular fa-heart"></i>
        }
      </p>
    </div>
  );
}
