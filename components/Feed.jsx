"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

// seperate component that renders a list of PromptCards

const PromptCardList = ({ posts, handleTagClick }) => {
  return (
    <div className="mt-16 prompt-layout">
      {posts.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        ></PromptCard>
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // fetch data from API
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearch = (e) => {
    const searchtext = e.target.value;
    setSearchText(searchtext);
    clearTimeout(searchTimeout);
    const timeout = setTimeout(() => {
      const searchResult = filterPrompts(searchtext);
      setFilteredPosts(searchResult);
    }, 500);
    setSearchTimeout(timeout);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search for a tag or username"
          className="search_input peer"
        ></input>
      </form>
      <PromptCardList
        posts={posts}
        handleTagClick={(tag) => {
          setSearchText(tag);
        }}
      ></PromptCardList>
    </section>
  );
};

export default Feed;
