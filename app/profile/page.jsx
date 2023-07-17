"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Profile from "@components/Profile";

const myProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [myPosts, setMyPosts] = useState([]);
  console.log(myPosts);
  useEffect(() => {
    // fetch data from API
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();
      setMyPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);
  // create 2 function handleDelete and handleEdit

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this post?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${+post._id}`, {
          method: "DELETE",
        });

        const filteredPost = myPosts.filter((item) => item._id !== post._id);
        setMyPosts(filteredPost);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEdit = async (post) => {
    router.push(`/update-prompt?post._id=${post._id}`);
  };

  return (
    <Profile
      name="My"
      desc=""
      data={myPosts}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
};

export default myProfile;
