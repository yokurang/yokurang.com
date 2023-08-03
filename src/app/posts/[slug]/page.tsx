import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import ReactMarkdown from 'react-markdown';
import BackToHomeButton from '@/app/components/BackToHomeButton';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-5xl p-8">
      <BackToHomeButton />
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
        <time className="text-xs text-gray-500 block" dateTime={post.date}>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        {post.categories && (
          <div className="mt-2 flex flex-wrap justify-center space-x-2">
            {post.categories.map((category, index) => (
              <span key={index} className="text-sm bg-blue-100 text-blue-500 rounded-full py-1 px-2">
                {category}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose prose-sm md:prose-md lg:prose-lg xl:prose-xl max-w-full text-gray-800 leading-relaxed mt-4 mb-8 overflow-x-hidden">
        <ReactMarkdown>{post.body.raw}</ReactMarkdown>
      </div>
    </article>
  );
};

export default PostLayout;
