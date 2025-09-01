import { Divider } from "@nextui-org/react";
import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import PostList from "@/components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/posts";
import { getRandomOnlineCount, getRandomMemberCount } from "@/utils/random";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4">
      <div className="lg:col-span-3 space-y-6">
        <div className="card-elevated p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-8 bg-gradient-orange rounded-full"></div>
            <h1 className="text-2xl font-bold text-gray-800">Trending Posts</h1>
          </div>
          <PostList fetchData={fetchTopPosts} />
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="card-elevated p-6 rounded-xl animate-slide-in-right">
          <TopicCreateForm />
        </div>
        
        <div className="card-elevated p-6 rounded-xl animate-slide-in-right" style={{animationDelay: '0.1s'}}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-6 bg-gradient-blue rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-800">Popular Topics</h3>
          </div>
          <Divider className="my-4 bg-custom-border" />
          <TopicList />
        </div>
        
        <div className="card-elevated p-6 rounded-xl bg-gradient-to-br from-reddit-orange/5 to-reddit-blue/5 animate-slide-in-right" style={{animationDelay: '0.2s'}}>
          <h4 className="font-semibold text-gray-800 mb-3">Welcome to Reddit Lite!</h4>
          <p className="text-sm text-custom-muted leading-relaxed mb-4">
            Join communities, share content, and connect with people who share your interests. 
            Start by exploring topics or creating your first post!
          </p>
          <div className="flex justify-between items-center text-xs text-custom-muted pt-3 border-t border-custom-border">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>{getRandomOnlineCount()} users online</span>
            </div>
            <div>
              <span className="font-medium">{getRandomMemberCount()}</span>
              <span className="ml-1">members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
