import { notFound } from "next/navigation";
import { db } from "@/db";
import { getRandomUpvotes, getRandomTimeAgo, getRandomTrendingPercentage } from "@/utils/random";

interface PostShowProps {
  postId: string;
}

export default async function PostShow({ postId }: PostShowProps) {
  const post = await db.post.findFirst({
    where: { id: postId },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="card-elevated p-8 m-4 rounded-xl animate-slide-up">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-3 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 text-custom-muted text-sm">
          <div className="w-2 h-2 bg-reddit-orange rounded-full"></div>
          <span>Posted {getRandomTimeAgo()}</span>
          <span>•</span>
          <span>{getRandomTrendingPercentage()}% upvoted</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span>🔥</span>
            <span>Trending</span>
          </span>
        </div>
      </div>
      
      <div className="prose max-w-none">
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-reddit-blue leading-relaxed text-gray-700">
          {post.content}
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-custom-border">
        <div className="flex items-center gap-4 text-custom-muted text-sm">
          <button className="flex items-center gap-2 hover:text-reddit-orange transition-colors">
            <span>👍</span>
            <span>{getRandomUpvotes()}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-reddit-blue transition-colors">
            <span>💬</span>
            <span>Comment</span>
          </button>
          <button className="flex items-center gap-2 hover:text-gray-600 transition-colors">
            <span>🔗</span>
            <span>Share</span>
          </button>
          <button className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
            <span>⭐</span>
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}
