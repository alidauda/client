'use client';
import axios from 'axios';
import { useState } from 'react';

export default function AddBlogs() {
  // const [username, setUsername] = useState("");
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  const handleSubmit = async (e: any) => {
    const blog = {
      username: 'JohnDoe',
      title: 'My Blog Post',
      description: 'This is the content of my blog post.',
    };

    try {
      const res = await fetch('http://localhost:4000/a/addblog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label> Username</label>
    //     <input
    //       onChange={(e) => {
    //         setUsername(e.target.value);
    //       }}
    //       value={username}
    //       placeholder="Input your username here"
    //     />
    //   </div>
    //   <div>
    //     <label>Blog Title</label>
    //     <input
    //       onChange={(e) => {
    //         setTitle(e.target.value);
    //       }}
    //       value={title}
    //       placeholder="Input your Blog Title here"
    //     />
    //   </div>
    //   <div>
    //     <label>Blog Description</label>
    //     <textarea
    //       onChange={(e) => {
    //         setDescription(e.target.value);
    //       }}
    //       value={description}
    //       placeholder="Input your Blog Description here"
    //     />
    //   </div>
    //   {/* <label>Blog Image</label> */}
    //   <button type="submit">Add Blog</button>
    // </form>
    <button onClick={handleSubmit}>Add Blog</button>
  );
}
