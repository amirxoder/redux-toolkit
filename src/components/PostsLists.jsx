import React from "react";

import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/posts/postsSlice";
import { motion } from "framer-motion";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostsLists = () => {
  const posts = useSelector(selectAllPosts);

  console.log(`Slice : ${posts.slice(1)}`);
  console.log(posts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPost = orderedPosts.map((post, index) => (
    <motion.article
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, type: "tween" }}
      key={post.id}
      className="posts__article"
    >
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} /> -
      <TimeAgo timeStamp={post.date} />
      <ReactionButton post={post} />
    </motion.article>
  ));

  return (
    <section className="posts__container">
      <h2 className="post__header">Posts</h2>
      {renderedPost}
    </section>
  );
};

export default PostsLists;
