"use client";

import { useEffect, useState } from "react";
import { BlogCard } from "@/components/blog/blog-card";
import Loading from "@/app/loading";
import type { BlogPost } from "@/types/blog";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data: BlogPost[]) => setPosts(data))
      .catch(() => setPosts([]));
  }, []);

  if (!posts) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-color-background">
      <div className="pt-[20vh] w-5/6 2xl:w-2/3 mx-auto pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-color-text">Blog</h1>
          <p className="mt-3 text-gray-500">
            Yazılarımız ve paylaşımlarımız
          </p>
        </div>
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[50vh] text-lg text-gray-600">
            Henuz blog yazisi bulunmamaktadir.
          </div>
        )}
      </div>
    </div>
  );
}
