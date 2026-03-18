"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Loading from "@/app/loading";
import type { BlogPost } from "@/types/blog";

const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_node: unknown, children: React.ReactNode) => (
      <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_node: unknown, children: React.ReactNode) => (
      <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_node: unknown, children: React.ReactNode) => (
      <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (_node: unknown, children: React.ReactNode) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (_node: unknown, children: React.ReactNode) => (
      <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: unknown, children: React.ReactNode) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>
    ),
    [BLOCKS.QUOTE]: (_node: unknown, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    [INLINES.HYPERLINK]: (node: unknown, children: React.ReactNode) => {
      const uri = (node as { data: { uri: string } }).data.uri;
      return (
        <a
          href={uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/blog/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data: BlogPost) => setPost(data))
      .catch(() => setNotFound(true));
  }, [slug]);

  if (notFound) {
    return (
      <div className="min-h-screen bg-color-background flex items-center justify-center">
        <p className="text-lg text-gray-600">Yazi bulunamadi.</p>
      </div>
    );
  }

  if (!post) {
    return <Loading />;
  }

  const date = new Date(post.createdAt).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-color-background">
      <div className="pt-[20vh] w-5/6 2xl:w-2/3 mx-auto pb-16">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-color-text mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
            <span>{post.writers.join(", ")}</span>
            <span>&middot;</span>
            <span>{date}</span>
          </div>
          <p className="text-lg text-gray-600 mb-8">{post.description}</p>
          <div className="prose prose-lg max-w-none text-color-text">
            {documentToReactComponents(post.body, richTextOptions)}
          </div>
        </article>
      </div>
    </div>
  );
}
