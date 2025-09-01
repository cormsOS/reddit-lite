import type { PostWithData } from "@/db/queries/posts";
import Link from "next/link";
import paths from "@/paths";

interface PostListProps {
  fetchData: () => Promise<PostWithData[]>;
}

export default async function PostList({ fetchData }: PostListProps) {
  const posts = await fetchData();

  const renderedPosts = posts.map((post, index) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }

    return (
      <div 
        key={post.id} 
        className="bg-white border border-custom-border rounded-xl p-5 hover:shadow-elevated transition-all duration-300 hover:border-reddit-orange/30 group animate-fade-in"
        style={{animationDelay: `${index * 0.1}s`}}
      >
        <Link href={paths.postShow(topicSlug, post.id)} className="block">
          <div className="flex items-start gap-4">
            {/* Vote section */}
            <div className="flex flex-col items-center gap-1 text-custom-muted">
              <button className="hover:text-reddit-orange transition-colors p-1">
                ▲
              </button>
              <span className="text-xs font-medium">42</span>
              <button className="hover:text-reddit-blue transition-colors p-1">
                ▼
              </button>
            </div>
            
            {/* Content section */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 text-xs text-custom-muted">
                <span className="bg-reddit-orange/10 text-reddit-orange px-2 py-1 rounded-full font-medium">
                  r/{topicSlug}
                </span>
                <span>•</span>
                <span>Posted by u/{post.user.name}</span>
                <span>•</span>
                <span>2 hours ago</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-reddit-orange transition-colors mb-2 line-clamp-2">
                {post.title}
              </h3>
              
              <div className="flex items-center gap-6 text-custom-muted text-sm">
                <div className="flex items-center gap-1">
                  <span>💬</span>
                  <span>{post._count.comments} comments</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>🔗</span>
                  <span>Share</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>🔖</span>
                  <span>Save</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="space-y-4">
      {renderedPosts.length > 0 ? (
        renderedPosts
      ) : (
        <div className="text-center py-12 text-custom-muted">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-lg font-medium mb-2">No posts yet</h3>
          <p className="text-sm">Be the first to create a post in this community!</p>
        </div>
      )}
    </div>
  );
}
