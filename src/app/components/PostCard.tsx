import { Post } from "contentlayer/generated";
import Link from "next/link";
import React from "react";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <article className="mb-8 border p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col items-start justify-between">
        <Link
          href={`/posts/${post.slug}`}
          className="text-xl font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-400 mb-1"
        >
          {post.title}
        </Link>

        <time dateTime={post.date} className="text-xs text-gray-600 mb-2 block">
          {post.displayDate}
        </time>

        <p className="my-2 text-sm leading-6 text-gray-600 line-clamp-3">
          {post.description}
        </p>

        <div className="text-xs my-1 gap-x-2 flex max-w-md flex-wrap">
          {post.displayTags.map((item: { label: string; value: string }) => {
            return (
              <Link
                key={item.value}
                href={`/category/${item.value}`}
                className="whitespace-nowrap block rounded-md bg-gray-200 mt-4 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default PostCard;
