import Image from "next/image";
import CommentCreateForm from "@/components/comments/comment-create-form";
import { fetchCommentsByPostId } from "@/db/queries/comments";
import { getRandomCommentUpvotes, getRandomCommentTimeAgo } from "@/utils/random";

interface CommentShowProps {
  commentId: string;
  postId: string;
}

export default async function CommentShow({
  commentId,
  postId,
}: CommentShowProps) {
  const comments = await fetchCommentsByPostId(postId);
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return null;
  }

  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => {
    return <CommentShow key={child.id} commentId={child.id} postId={postId} />;
  });

  return (
    <div className="bg-white border border-custom-border rounded-lg p-4 hover:border-reddit-orange/20 transition-colors">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <Image
            src={comment.user.image || ""}
            alt="user image"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-2 border-gray-200"
          />
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-gray-800">
              u/{comment.user.name}
            </p>
            <span className="text-custom-muted text-xs">•</span>
            <span className="text-custom-muted text-xs">{getRandomCommentTimeAgo()}</span>
          </div>

          <div className="text-gray-700 leading-relaxed">
            {comment.content}
          </div>

          <div className="flex items-center gap-4 text-custom-muted text-sm">
            <button className="hover:text-reddit-orange transition-colors flex items-center gap-1">
              <span>👍</span>
              <span>{getRandomCommentUpvotes()}</span>
            </button>
            <button className="hover:text-reddit-blue transition-colors flex items-center gap-1">
              <span>👎</span>
            </button>
            <button className="hover:text-gray-600 transition-colors">
              Reply
            </button>
          </div>

          <CommentCreateForm postId={comment.postId} parentId={comment.id} />
        </div>
      </div>

      {children.length > 0 && (
        <div className="ml-6 mt-4 pl-4 border-l-2 border-gray-200 space-y-3">
          {renderedChildren}
        </div>
      )}
    </div>
  );
}
