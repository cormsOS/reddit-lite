import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";
import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: Promise<{
    term: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = await searchParams;

  if (!term) {
    redirect(`/`);
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="card-elevated p-6 rounded-xl mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-blue rounded-full flex items-center justify-center text-white">
            🔍
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Search Results</h1>
            <p className="text-custom-muted">
              Found posts matching <span className="font-medium text-reddit-orange">"{term}"</span>
            </p>
          </div>
        </div>
      </div>
      
      <div className="card-elevated p-6 rounded-xl">
        <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
      </div>
    </div>
  );
}
