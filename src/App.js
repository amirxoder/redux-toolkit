import React from "react";
import "./App.css";
import AddPost from "./components/AddPost";
import PostsLists from "./components/PostsLists";

const App = () => {
  return (
    <main className="App">
      <AddPost />
      <PostsLists />
    </main>
  );
};

export default App;
