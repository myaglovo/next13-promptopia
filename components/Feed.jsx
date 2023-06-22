"use client";

import { useState, useEffect } from "react";
import PromptCard from "@components/PromptCard";

const PromptCarList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard key={post._id} post={post} handleTagClick />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const HandleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input
          type="text"
          value={searchText}
          onChange={HandleSearchChange}
          placeholder="Search needed prompt"
          required
          className="search_input peer"
        />
      </form>

      <PromptCarList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
