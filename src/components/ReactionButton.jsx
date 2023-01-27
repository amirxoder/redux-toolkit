import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "../features/posts/postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "🧑‍🦳",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => (
    <button
      key={name}
      type="button"
      className="reactionButton"
      onClick={() =>
        dispatch(reactionAdded({ postId: post.id, reaction: name }))
      }
    >
      {emoji} {post.reactions[name]}
    </button>
  ));

  return <div>{reactionButton}</div>;
};

export default ReactionButton;
