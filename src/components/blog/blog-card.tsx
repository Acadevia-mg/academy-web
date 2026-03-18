import Link from "next/link";
import type { BlogPost } from "@/types/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="h-full rounded-xl border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-3">
          {post.description}
        </p>
      </div>
    </Link>
  );
}
