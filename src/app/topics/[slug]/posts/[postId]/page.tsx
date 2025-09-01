import { Suspense } from "react";
import Link from "next/link";
import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/paths";
import PostShowLoading from "@/components/posts/post-show-loading";

interface PostShowPageProps {
  params: Promise<{
    slug: string;
    postId: string;
  }>;
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = await params;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <Link
          className="inline-flex items-center gap-2 text-reddit-blue hover:text-reddit-darkBlue transition-colors font-medium"
          href={paths.topicShow(slug)}
        >
          <span className="text-lg">←</span>
          Back to r/{slug}
        </Link>
      </div>

      <div className="space-y-6">
        <Suspense fallback={<PostShowLoading />}>
          <PostShow postId={postId} />
        </Suspense>

        <div className="card-elevated p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-6 bg-gradient-blue rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-800">Add a Comment</h3>
          </div>
          <CommentCreateForm postId={postId} startOpen />
        </div>

        <div className="card-elevated p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-6 bg-gradient-orange rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-800">Comments</h3>
          </div>
          <CommentList postId={postId} />
        </div>
      </div>
    </div>
  );
}
