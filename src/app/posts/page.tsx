import React from "react";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostCard from "../components/PostCard";
import NavigationBar from "../components/NavBar";

const posts = allPosts.filter(item => !item.draft).sort((a, b) => {
  return compareDesc(new Date(a.date), new Date(b.date));
});

const PostPage = () => {
  return (
    <div className="mx-auto max-w-6xl py-16 px-4 bg-white min-h-screen">
      <NavigationBar />
      <header className="text-center pt-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Posts</h1>
        <p className="text-lg text-gray-600 mb-6">All posts arranged by chronological order</p>
      </header>
      <section className="py-12 px-4">
        <div className="space-y-8 rounded shadow-md bg-gray-100 p-6"> {/* Linear layout for posts */}
          {posts
            .filter((item) => !item.categories?.includes("Notes"))
            .map((post) => (
              <div key={post._id} className="p-6 bg-white rounded shadow-md">
                <PostCard post={post} />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export const metadata = {
  title: "All Posts",
  description: "Read all posts written by the author in chronological order",
  author: "Author's Name",
};

export default PostPage;
