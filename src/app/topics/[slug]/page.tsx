import PostCreateForm from '@/components/posts/post-create-form';
import PostList from '@/components/posts/post-list';
import { fetchPostsByTopicSlug } from '@/db/queries/posts';

interface TopicShowPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = await params;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4">
      <div className="lg:col-span-3 space-y-6">
        <div className="card-elevated p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
              {slug.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">r/{slug}</h1>
              <p className="text-custom-muted">Community posts and discussions</p>
            </div>
          </div>
          <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
        </div>
      </div>

      <div className="space-y-4">
        <div className="card-elevated p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-6 bg-gradient-blue rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-800">Create Post</h3>
          </div>
          <PostCreateForm slug={slug} />
        </div>
        
        <div className="card-elevated p-6 rounded-xl bg-gradient-to-br from-reddit-blue/5 to-reddit-orange/5">
          <h4 className="font-semibold text-gray-800 mb-3">About r/{slug}</h4>
          <p className="text-sm text-custom-muted leading-relaxed">
            Welcome to the {slug} community! Share your thoughts, ask questions, 
            and connect with others who share your interests.
          </p>
          <div className="mt-4 pt-4 border-t border-custom-border">
            <div className="text-xs text-custom-muted">
              <div className="flex justify-between">
                <span>Members</span>
                <span className="font-medium">1.2k</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Online</span>
                <span className="font-medium text-green-500">42</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
