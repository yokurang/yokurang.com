import Link from "next/link";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostCard from "./components/home/PostCard";
import NavigationBar from "./components/NavigationBar";

const posts = allPosts.filter(item => !item.draft).sort((a, b) => {
  return compareDesc(new Date(a.date), new Date(b.date));
});

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4">
      <NavigationBar />
      <header className="text-center pt-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome!</h1>
        <p className="text-lg text-gray-600 mb-2">I write blogs here to share my insights and learnings.</p>
        <p className="text-lg text-gray-600">To know more about me, view my resume, or explore my projects, please use the links in the navigation bar.</p>
      </header>
      <section className="py-12 px-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Latest Posts</h2>
        {posts
        .slice(0, 3)
        .map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
        <div className="text-center mt-4">
          <Link href="/posts" className="text-gray-600 hover:underline">View all posts</Link>
        </div>
      </section>
      <footer className="text-center py-8">
        <p className="text-md text-gray-600">If you&apos;d like to reach out, please <Link href="/contact" className="text-blue-700 hover:underline">click here</Link>.</p>
      </footer>
    </div>
  );
}
