import CommentShow from "@/components/comments/comment-show";
import { fetchCommentsByPostId } from "@/db/queries/comments";

interface CommentListProps {
  postId: string;
}

export default async function CommentList({ postId }: CommentListProps) {
  const comments = await fetchCommentsByPostId(postId);

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment, index) => {
    return (
      <div 
        key={comment.id}
        className="animate-fade-in"
        style={{animationDelay: `${index * 0.1}s`}}
      >
        <CommentShow commentId={comment.id} postId={postId} />
      </div>
    );
  });

  return (
    <div className="space-y-4">
      {comments.length > 0 ? (
        <>
          <div className="flex items-center gap-2 text-custom-muted">
            <span className="text-lg font-semibold text-gray-800">{comments.length}</span>
            <span>comment{comments.length !== 1 ? 's' : ''}</span>
          </div>
          <div className="space-y-4">
            {renderedComments}
          </div>
        </>
      ) : (
        <div className="text-center py-8 text-custom-muted">
          <div className="text-3xl mb-3">💬</div>
          <h3 className="font-medium mb-2">No comments yet</h3>
          <p className="text-sm">Be the first to share your thoughts!</p>
        </div>
      )}
    </div>
  );
}
