"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Form from "@components/Form";
import React from "react";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState("");
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const createPrompt = async (e) => {};
  return (
    <Form
      type="Create"
      submitting={submitting}
      post={post}
      setPost={setPost}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
