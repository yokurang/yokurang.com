import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { format } from "date-fns";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

function processString(inputString: string) {
  const escapedString = inputString
    .replace(/[\\"']/g, "\\$&")
    .replace(/\u0000/g, "\\0");
  const lowerCaseString = escapedString.toLowerCase();
  const words = lowerCaseString.split(/\W+/);
  const processedString = words.join("-");
  return processedString;
}

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    categories: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    draft: {
      type: "boolean",
      required: true,
      default: false,
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => processString(doc.title),
    },
    isDraft: {
      type: "boolean",
      resolve: (doc) => doc.draft,
    },
    displayDate: {
      type: "string",
      resolve: (doc) => format(new Date(doc.date), "LLLL d, yyyy"),
    },
    displayTags: {
      type: "list",
      of: {
        type: "object",
      },
      resolve: (doc) => {

        const items = Array.isArray(doc.categories) ? doc.categories : [];

        return items.map((item) => {
          return {
            label: item,
            value: processString(item),
          };
        });
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      remarkGfm,
      rehypeAccessibleEmojis,
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});