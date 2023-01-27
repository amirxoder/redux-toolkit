import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsAdded } from "../features/posts/postsSlice";
import { selectAllUsers } from "../features/users/usersSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const onAuthorChange = (e) => setUserId(e.target.value);
  console.log(userId);

  const onSavePostClick = () => {
    if (title && content) {
      dispatch(postsAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="addpost">
      <h2 className="addpost__title">Add a New Posts</h2>
      <form className="form__wrapper">
        <input
          placeholder="Post Title"
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
        <div className="option">
          <label htmlFor="postAuthor">Author:</label>
          <select id="postAuthor" value={userId} onChange={onAuthorChange}>
            <option value=""></option>
            {userOptions}
          </select>
        </div>
        <textarea
          name="postContent"
          id="postContent"
          className="input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Content"
        />
        <button
          type="button"
          onClick={() => onSavePostClick()}
          disabled={!canSave}
        >
          Send Post
        </button>
      </form>
    </section>
  );
};

export default AddPost;
