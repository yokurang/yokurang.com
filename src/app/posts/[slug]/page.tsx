import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from "next-contentlayer/hooks";
import BackToHomeButton from '@/app/components/BackToHomeButton';


// MDX Components 
import Paragraph from '@/app/components/posts/Paragraph';
import Heading from '@/app/components/posts/Heading';
import Highlight from '@/app/components/posts/Highlight';
import Definition from '@/app/components/posts/Definition';
import ThoughtBubble from '@/app/components/posts/ThoughtBubble';
import Pre from '@/app/components/posts/Pre';
import References from '@/app/components/posts/References';
import Summary from '@/app/components/posts/Summary';
import Problem from '@/app/components/posts/Problem';

const MDXComponents = {
  Paragraph,
  Heading,
  Highlight,
  Definition,
  ThoughtBubble,
  References,
  Summary,
  Problem,

  a: ({ ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="animated-underline border-b border-dotted border-dark hover:border-dark/0"
      {...props}
    />
  ),
  ul: ({ ...props }) => (
    <ul className="my-6 ml-6 list-outside list-disc text-md" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="my-6 ml-6 list-outside list-decimal text-md" {...props} />
  ),
  li: ({ ...props }) => <li className="mt-2 text-md leading-7" {...props} />,
  blockquote: ({
    className,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-6 border-l-4 border-dark pl-6 italic text-dark [&>*]:text-zinc-600"
      {...props}
    />
  ),
  b: ({ ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <b {...props} className="text-md leading-6" />
  ),
  table: ({ ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 min-w-full overflow-y-auto rounded-md">
      <table className="min-w-full divide-y divide-gray-400" {...props} />
    </div>
  ),
  tr: ({ ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="m-0 p-0 even:bg-white" {...props} />
  ),
  th: ({ ...props }) => (
    <th
      className="border border-gray-400 bg-white px-4 py-2 text-left font-semibold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: ({ ...props }) => (
    <td
      className="border border-gray-400 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-6 border-gray-400 border-1" {...props} />
  ),
  h1: ({ ...props }) => (
    <h1 className="text-3xl font-bold text-gray-900 mb-2" {...props} />
  ),
  h2: ({ ...props }) => (
    <h2 className="text-2xl font-bold text-gray-900 mb-2" {...props} />
  ),
  h3: ({ ...props }) => (
    <h3 className="text-xl font-bold text-gray-900 mb-2" {...props} />
  ),
  pre: Pre,
}

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const Content = getMDXComponent(post.body.code);

  return (
    <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-5xl p-8">
        <BackToHomeButton />
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
          <time className="text-xs text-gray-500 block" dateTime={post.date}>
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <div className="mt-2 flex flex-wrap justify-center space-x-2">
            {post.categories?.map((category, index) => (
              <span key={index} className="text-sm bg-blue-100 text-blue-500 rounded-full py-1 px-2">
                {category}
              </span>
            )) || <p>Loading...</p>}
          </div>
        </header>
        <div className="prose prose-sm md:prose-md lg:prose-lg xl:prose-xl max-w-full text-gray-800 leading-relaxed mt-4 mb-8 overflow-x-hidden">
          <Content components={MDXComponents} />
        </div>
      </article>
    </div>
  );
};

export default PostLayout;
