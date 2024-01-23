import Link from "next/link";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostCard from "./components/PostCard";
import NavigationBar from "./components/NavBar";
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { Email, GitHub } from 'src/data/contact/socials';

const posts = allPosts.filter(item => !item.draft).sort((a, b) => {
  return compareDesc(new Date(a.date), new Date(b.date));
});

export default function Home() {
  return (
    <div className="bg-white mx-auto max-w-2xl py-16 px-4">
      <NavigationBar />
      <main className="flex-grow py-16 px-4">
        <header className="text-center pt-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome!</h1>
          <p className="text-lg text-gray-600 mb-2">I write blogs here to share my insights and learnings.</p>
          <p className="text-lg text-gray-600">To know more about me, view my resume, or explore my projects, please use the links in the navigation bar.</p>
        </header>
        <section className="py-12 px-4">
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Latest Posts</h2>
            {posts.slice(0, 3).map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
            <Link href="/posts">
              <span className="text-gray-600 hover:underline cursor-pointer">View all posts</span>
            </Link>
          </div>
        </section>
      </main>
      <footer className="text-center py-8 bg-gray-50 w-full">
        <div className="space-y-4">
          <p className="text-md text-gray-600">
            You can find the source code of this website on{' '}
          </p>
          <div className="flex justify-center space-x-4">
            <Link href={`mailto:${Email}`}>
              <span className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer">
                <FaEnvelope className="h-6 w-6 mr-2" />Email Me
              </span>
            </Link>
            <Link href={GitHub}>
              <span className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer">
                <FaGithub className="h-6 w-6 mr-2" />GitHub Profile
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}