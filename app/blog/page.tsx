import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { format } from "date-fns";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Blog</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex items-baseline gap-4 mb-1">
                <time className="text-sm text-muted-foreground shrink-0">
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </time>
              </div>
              <h2 className="text-lg font-semibold group-hover:text-blue-600 transition-colors mb-2">
                {post.title}
              </h2>
              {post.description && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
