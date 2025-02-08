import React from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import BlogPostList from "./components/blogPostList.jsx";
import MainContent from "./mainContent.jsx";
import HomeLayout from "./homeLayout.jsx";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import CreatePost from "./Pages/createPost.jsx";
import Post from "./Pages/post.jsx";
import MyBlogs from "./Pages/MyBlogs.jsx";

export default function Home() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<MainContent />} />
        <Route path="/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/myblogs" element={<MyBlogs />} />
      </Route>
    </Routes>
  );
}
