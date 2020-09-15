import React from "react";
import "./Comments.css";

function Comments(props) {
  return (
    <div className="comment">
      <div className="date">{props.comment.date}</div>
      <div className="comm">{props.comment.text}</div>
    </div>
  );
}

export default Comments;
